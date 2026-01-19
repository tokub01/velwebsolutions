import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  try {
    const body = await readBody(event)

    // 1. Validierung
    if (!body.token || !body.email || !body.message || !body.name) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bitte alle Pflichtfelder ausfüllen.'
      })
    }

    // 2. Sicherheits-Check (Runtime Config Test)
    // Wir wandeln alles in Strings um, um den html.replace Fehler zu vermeiden
    if (!config.smtpUser || !config.smtpPass) {
      const missing = !config.smtpUser ? 'USER fehlt' : 'PASS fehlt';
      console.error("SMTP Konfigurationsfehler:", missing);
      throw createError({
        statusCode: 500,
        statusMessage: `Mail-Konfiguration unvollständig: ${missing}`
      })
    }

    // 3. Google reCAPTCHA Check
    const verification: any = await $fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      params: {
        secret: config.recaptchaSecretKey,
        response: body.token
      }
    })

    if (!verification.success) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Sicherheits-Check (reCAPTCHA) fehlgeschlagen.'
      })
    }

    // 4. SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: Number(config.smtpPort),
      secure: false, // STARTTLS (Port 587)
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass,
      },
      tls: {
        rejectUnauthorized: false // Wichtig für IONOS Zertifikate
      }
    })

    // 5. Mail-Optionen
    const mailOptions = {
      from: `"Kontaktformular" <${config.smtpUser}>`,
      to: 'info@velwebsolutions.de',
      replyTo: body.email,
      subject: `[Anfrage] ${body.title || 'Neue Nachricht'} - von ${body.name}`,
      text: `Name: ${body.name}\nE-Mail: ${body.email}\n\nNachricht:\n${body.message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #dc2626;">Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>E-Mail:</strong> ${body.email}</p>
          <hr />
          <p><strong>Nachricht:</strong></p>
          <p style="white-space: pre-wrap;">${body.message}</p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)
    return { success: true }

  } catch (error: any) {
    // DER FIX FÜR html.replace:
    // Wir stellen sicher, dass statusMessage IMMER ein einfacher String ist.
    const rawMessage = error.statusMessage || error.message || 'Server-Fehler';
    const cleanMessage = typeof rawMessage === 'string' ? rawMessage : JSON.stringify(rawMessage);

    console.error("--- API FEHLER ---", cleanMessage);

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: cleanMessage
    })
  }
})