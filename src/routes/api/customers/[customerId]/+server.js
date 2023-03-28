export const GET = async ({ params }) => {
  const res = await fetch(`https://dapper-bunny-7f59c6.netlify.app/api/customers/profile?id=${params.customerId}`)
  const profile = await res.json()

  return new Response(JSON.stringify(profile))
}