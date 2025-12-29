// server/api/contact.post.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  // 1. reCAPTCHA Validierung (Server-to-Server)
  const recaptchaRes = await $fetch<any>('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    params: {
      secret: config.recaptchaSecretKey,
      response: body['g-recaptcha-response']
    }
  })

  if (!recaptchaRes.success) {
    throw createError({ statusCode: 400, statusMessage: 'Spam-Verdacht: reCAPTCHA fehlgeschlagen.' })
  }

  // 2. EmailJS API Aufruf vom Server aus
  // Hinweis: EmailJS bietet eine REST API an
  try {
    await $fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: {
        service_id: config.emailjsServiceId,
        template_id: config.emailjsTemplateId,
        user_id: config.emailjsPrivateKey, // Hier den Private Key nutzen!
        template_params: {
          from_name: body.from_name,
          from_title: body.from_title,
          from_email: body.from_email,
          message: body.message
        }
      }
    })
    return { success: true }
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Mail-Server-Fehler' })
  }
})