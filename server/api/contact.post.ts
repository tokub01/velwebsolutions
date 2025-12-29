import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const token = body['g-recaptcha-response']

  try {
    // 1. Google Validierung (die ja bereits bei dir klappt)
    const verify: any = await $fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: config.recaptchaSecretKey,
        response: token
      }).toString()
    })

    if (!verify.success) {
      throw createError({ statusCode: 403, statusMessage: 'Google reCAPTCHA abgelehnt' })
    }

    console.log('[API] Google Check OK. Starte EmailJS Versand...')

    // 2. EmailJS Versand mit Deep-Error-Log
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: config.public.emailjsServiceId,
        template_id: config.public.emailjsTemplateId,
        user_id: config.public.emailjsPublicKey,
        accessToken: config.emailjsPrivateKey,
        template_params: {
          from_name: body.from_name,
          from_email: body.from_email,
          project_title: body.from_title,
          message: body.message
        }
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      // DAS HIER ZEIGT UNS DEN WAHREN GRUND IM TERMINAL:
      console.error('[EmailJS Error Details]:', errorText)
      throw createError({
        statusCode: response.status,
        statusMessage: `EmailJS Fehler: ${errorText}`
      })
    }

    console.log('[API] Nachricht erfolgreich versendet!')
    return { status: 'success' }

  } catch (error: any) {
    console.error('[Final API Error]:', error.statusMessage || error.message)
    throw error
  }
})