// server/api/contact.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const emailJsPayload = {
    service_id: config.emailjsServiceId,
    template_id: config.emailjsTemplateId,
    user_id: config.emailjsPrivateKey, // Deine Public ID (glPA_...)
    accessToken: config.emailjsPrivateKey, // <--- HIER den Private Key mitsenden!
    template_params: {
      ...body,
      'g-recaptcha-response': body['g-recaptcha-response']
    }
  }

  // ... restlicher Code
})