import { redirect } from "@sveltejs/kit"

export const load = ({ cookies }) => {
  if( !cookies.get("access") ) {
    throw redirect(307, `/`)
  }
}
export const actions = {
  result: async ({request}) => {
    const data = await request.formData()
    const name = data.get('name')

    return {
      name
    }
  }
}