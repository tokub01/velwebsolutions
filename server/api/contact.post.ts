export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  // 1. Debug-Logs für das Netlify-Panel (Nur in Logs sichtbar, nicht im Browser!)
  console.log('[API] Request erhalten von:', body.from_email);
  
  // Überprüfung der Keys (ohne die echten Werte voll zu loggen aus Sicherheitsgründen)
  console.log('[API] Config Check:', {
    hasServiceId: !!config.emailjsServiceId,
    hasTemplateId: !!config.emailjsTemplateId,
    hasPublicKey: !!config.emailjsPublicKey,
    hasPrivateKey: !!config.emailjsPrivateKey,
    hasRecaptchaSecret: !!config.recaptchaSecretKey
  });

  // 2. Validierung der Umgebungsvariablen
  if (!config.emailjsPublicKey || !config.emailjsPrivateKey) {
    console.error('[API] FEHLER: EmailJS Keys fehlen in den Environment Variables!');
    throw createError({
      statusCode: 500,
      statusMessage: 'Server-Konfigurationsfehler: Keys fehlen.',
    });
  }

  try {
    // 3. reCAPTCHA Validierung
    const recaptchaToken = body['g-recaptcha-response'];
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${config.recaptchaSecretKey}&response=${recaptchaToken}`;
    
    const recaptchaRes: any = await $fetch(verifyURL, { method: 'POST' });
    if (!recaptchaRes.success) {
      console.error('[API] reCAPTCHA Validierung fehlgeschlagen:', recaptchaRes['error-codes']);
      throw createError({ statusCode: 400, statusMessage: 'Sicherheitsprüfung fehlgeschlagen.' });
    }

    // 4. EmailJS Versand via REST API
    // Wir nutzen hier direkt die API, da das SDK oft Probleme in Serverless Umgebungen macht
    await $fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: {
        service_id: config.emailjsServiceId,
        template_id: config.emailjsTemplateId,
        user_id: config.emailjsPublicKey, // EmailJS nennt den Public Key in der API "user_id"
        accessToken: config.emailjsPrivateKey, // Der Private Key ist das "accessToken"
        template_params: {
          from_name: body.from_name,
          from_title: body.from_title,
          from_email: body.from_email,
          message: body.message
        }
      }
    });

    return { status: 'success', message: 'Email versendet.' };

  } catch (error: any) {
    console.error('[API] Finaler Fehler beim Versand:', error.data || error.message);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Systemfehler beim Versand.',
    });
  }
});