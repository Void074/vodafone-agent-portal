export const POST = async ({ request }) => {
  const body = await request.json()
  console.log(body)
  return new Response(JSON.stringify({body}),  {status: 200})
}