import { redirect } from '@sveltejs/kit'

export const load = ({ cookies }) => {
  if ( !cookies.get("access")){
    throw redirect(307, `/`)
  }
}

export const actions = {
  customer_register: async ({request}) => {
    const data = await request.formData()
    const first_name = data.get('first_name')
    const last_name= data.get('last_name')
    const dob = data.get('dob')
    const gender = data.get('gender')
    const mobile_number = data.get('msisdn')
    const province = data.get('province')

    return {
      customer: {
        first_name,
        last_name,
        dob,
        gender,
        mobile_number,
        province
      }
    }
  }
}