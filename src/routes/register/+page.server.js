import { fail } from '@sveltejs/kit'
import  bcrypt from "bcrypt"

export const actions = {
  agent: async ({ request }) => {
    const data = await request.formData()
    const first_name = data.get('first_name')
    const last_name = data.get('last_name')
    const user_name = data.get('user_name')
    const password = data.get('password')

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
      return fail(400, {
        missing: true,
        message: "password required", 
        first_name, 
        last_name, 
        user_name
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const response = await fetch('https://dapper-bunny-7f59c6.netlify.app/api/users', {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        user_name,
        hashedPassword
      }),
      headers: {
        'content-type': 'application/json'
      }
    })

    const user = await response.json()
    return user
  }
}