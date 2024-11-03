export default eventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const email = body.email
  if (!email) {
    throw createError({
      status: 400,
      message: `Email is required`,
    })
  }

  if (!config.brevo.apiKey || !config.brevo.listId) {
    throw createError({
      status: 500,
      message: `Oops! An error has occurred, please try again later`,
    })
  }

  try {
    await $fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': config.brevo.apiKey,
      },
      body: {
        email,
        listIds: [config.brevo.listId],
        updateEnabled: true,
      },
    })
  }
  catch (error) {
    console.error(error)
    throw createError({
      status: 500,
      message: `Oops! An error has occurred, please try again later`,
    })
  }

  return sendNoContent(event)
})
