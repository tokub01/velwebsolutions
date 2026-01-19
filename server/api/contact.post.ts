import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    // In Nitro/Nuxt 3 Server-Routes müssen readBody und useRuntimeConfig
    // NICHT importiert werden, sie sind global verfügbar.
    const body = await readBody(event)
    const config = useRuntimeConfig()

    // 1. Validierung der Eingaben
    if (!body.token || !body.email || !body.message || !body.name) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bitte alle Pflichtfelder ausfüllen.'
      })
    }

    // 2. Google reCAPTCHA Check
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
        statusMessage: 'Sicherheits-Check fehlgeschlagen.'
      })
    }

    // 3. SMTP Transporter (Direkt mit Nodemailer)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ionos.de',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // 4. Mail-Versand
    await transporter.sendMail({
      from: `"Kontaktformular" <${process.env.SMTP_USER}>`,
      to: 'info@velwebsolutions.de',
      replyTo: body.email,
      subject: `[Briefing] ${body.title || 'Anfrage'} - von ${body.name}`,
      text: `Name: ${body.name}\nE-Mail: ${body.email}\n\nNachricht:\n${body.message}`
    })

    return { success: true }

  } catch (error: any) {
    console.error("--- API FEHLER ---", error.message)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Server-Fehler beim Mail-Versand'
    })
  }
})