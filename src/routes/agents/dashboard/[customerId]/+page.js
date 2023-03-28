export const load = ({ params, fetch }) => {
  const fetchProfile = async (id) => {
    const res = await fetch(`/api/customers/${id}`)
    const data = await res.json()

    return data
  }

  return {
    profile: fetchProfile(params.customerId)
  }
}