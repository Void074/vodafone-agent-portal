import { redirect } from "@sveltejs/kit"

export const load = ({ cookies }) => {
  if(!cookies.get("access")){
    throw redirect(307, `/`)
  }
}

export const actions = {
  logout: async ({ cookies }) => {
    cookies.set("access", "", {
      path: "/",
      expires: new Date(0)
    })

    throw redirect(302, "/")
  }
}