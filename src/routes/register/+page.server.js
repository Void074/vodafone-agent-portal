import { fail } from '@sveltejs/kit'

export const actions = {
  register_user: async ({ request }) => {
    const data = await request.formData()
    const first_name = data.get('first_name')
    const last_name = data.get('last_name')
    const user_name = data.get('user_name')
    const password = data.get('verify_password')

    if(!first_name){
      return fail(400,{
        missing: true, 
        message: "first name required",
        last_name,
        user_name,
        password
      }) 
    }

    if(!last_name){
      return fail(400, {
        missing: true,
        message: "last name required",
        first_name,
        user_name,
        password
      })
    }

    if(!user_name){
      return fail(400, {
        missing: true,
        message: "username required",
        first_name,
        last_name,
        password
      })
    }

    if(!password){
      return fail(400, {message: "password required"}, first_name, last_name, user_name)
    }

    return {
      first_name,
      last_name,
      user_name,
      password
    }
  }
}