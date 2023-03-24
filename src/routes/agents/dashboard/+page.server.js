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