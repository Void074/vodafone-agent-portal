import { redirect, fail } from "@sveltejs/kit"
import bcrypt from "bcrypt"

export const actions = {
  user_login: async ({ cookies, request}) => {
      const data = await request.formData()
      const user_name = data.get('username')
      const password = data.get('current_password')

      if (!user_name){
        return fail(400, { 
          message: "Username required!", 
          missing: true, 
          password
        })
      }

      if (!password){
        return fail(400, { 
          message: "Password required", 
          missing: true, 
          user_name
        })
      }

      // todo(gedare): connect to database (ASAP)
      const res = await fetch('https://dapper-bunny-7f59c6.netlify.app/api', {
        method: 'POST',
        body: JSON.stringify({
          user_name,
          password
        }),
        headers: {
          'content-type': 'application/json'
        }
      })

      let user = await res.json()
      let udata = {...user}

      if (user_name === udata.user_name){
         cookies.set("access", "true", {path:"/", sameSite: "strict"})
         throw redirect(302, "/dashboard")
      }
      
      if(!udata.user_name){
        return fail(400, { credentials: true, message: "invalid username or password" })
      }
      // if (user_name == "gdorke" && password == "12345678"){
      //   cookies.set("access", "true", {path:"/", sameSite: "strict"})
      //   throw redirect(302, "/dashboard")
      // }
  }
}