import { redirect } from "@sveltejs/kit"

export const load = ({ cookies, fetch }) => {
  if(!cookies.get("access")){
    throw redirect(307, `/`)
  }

  const fetchCustomer = async () => {
    const res = await fetch('https://dapper-bunny-7f59c6.netlify.app/api/customers')
    const results = await res.json()
    return results
  }

  return {
    results: fetchCustomer()
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