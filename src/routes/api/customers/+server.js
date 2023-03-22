// I add this file why isn't showing the the project build?
export const GET = async () => {
  const res = await fetch('https://dapper-bunny-7f59c6.netlify.app/api/customers')
  const data = await res.json()
  return new Response(JSON.stringify({data}), { status: 200})
}