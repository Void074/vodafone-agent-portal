import { redirect, fail } from "@sveltejs/kit"

export const actions = {
  user_login: async ({ cookies, request}) => {
      const data = await request.formData()
      const username = data.get('username')
      const password = data.get('current_password')

      // todo(gedare): connect to database (ASAP)
      if (username == "gdorke" && password == "12345678"){
        cookies.set("access", "true", {path:"/", sameSite: "strict"})
        throw redirect(302, "/dashboard")
      }
        

      if (!username){
        return fail(400, { message: "username required!"}, password)
      }

      if (!password){
        return fail(400, { message: "password required"}, username)
      }

      return {
        message: "Invalid username or password"
      }
  }
}