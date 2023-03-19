export const actions = {
  register_user: async ({request}) => {
    const data = await request.formData()
    const first_name = data.get('first_name')
    const last_name = data.get('last_name')
    const user_name = data.get('username')
    const password = data.get('verify_password')

    return {
      first_name,
      last_name,
      user_name,
      password
    }
  }
}