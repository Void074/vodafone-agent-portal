import { redirect, fail } from "@sveltejs/kit"

export const actions = {
  user_login: async ({ cookies, request}) => {
      const data = await request.formData()
      const username = data.get('username')
      const password = data.get('current_password')

      if (!username){
        return fail(400, { 
          message: "Username required!", 
          missing: true, password
        })
      }

      if (!password){
        return fail(400, { 
          message: "Password required", 
          missing: true, 
          username
        })
      }

      // todo(gedare): connect to database (ASAP)
      // const fetctUser = async() => {
      //   const res = await fetch('/api/authenticate')
      //   const customers = await res.json()
      // }

      if (username == "gdorke" && password == "12345678"){
        cookies.set("access", "true", {path:"/", sameSite: "strict"})
        throw redirect(302, "/dashboard")
      }
        


      return {
        message: "Invalid username or password"
      }
  }
}