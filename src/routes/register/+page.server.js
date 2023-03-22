import { fail } from '@sveltejs/kit'
import  bcrypt from "bcrypt"

export const actions = {
  agent: async ({ request }) => {
    const data = await request.formData()
    const first_name = data.get('first_name')
    const last_name = data.get('last_name')
    const user_name = data.get('user_name')
    const password = data.get('verify_password')

    if(!first_name){
      return fail(400,{
        success: false,
        missing: true, 
        message: "first name required",
        last_name,
        user_name,
        password
      }) 
    }

    if(!last_name){
      return fail(400, {
        success: false,
        missing: true,
        message: "last name required",
        first_name,
        user_name,
        password
      })
    }

    if(!user_name){
      return fail(400, {
        success: false,
        missing: true,
        message: "username required",
        first_name,
        last_name,
        password
      })
    }

    if(!password){
      return fail(400, {
        success: false,
        missing: true,
        message: "password required", 
        first_name, 
        last_name, 
        user_name
      })
    }

    const hashedPwd = await bcrypt.hash(password, 10)
    const response = await fetch('http://localhost:3001/api/users', {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        user_name,
        hashedPwd
      }),
      headers: {
        'content-type': 'application/json'
      }
    })

    const user =  await response.json()
    return user
  }
}