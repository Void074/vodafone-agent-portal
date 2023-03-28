import { redirect } from "@sveltejs/kit"

export const load = ({ cookies, fetch }) => {
  if(!cookies.get("access")){
    throw redirect(307, `/`)
  }

  const fetchCustomer = async () => {
    const res = await fetch('/api/customers')
    const customers = await res.json()
    return customers.data
  }

  return {
    customers: fetchCustomer()
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