import { redirect, fail } from '@sveltejs/kit'

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

    if(!first_name){
      throw fail(400, {message: "first name require"}, last_name, dob, gender, mobile_number, province)
    }
    
    if(!last_name){
      throw fail(400, {message: "first name require"}, first_name, dob, gender, mobile_number, province)
    }

    if(!dob){
      throw fail(400, {message: "first name require"}, first_name, last_name, gender, mobile_number, province)
    }

    if(!gender){
      throw fail(400, {message: "first name require"}, first_name, last_name, dob, mobile_number, province)
    }

    if(!mobile_number){
      throw fail(400, {message: "first name require"}, first_name, last_name, dob, gender, province)
    }

    if(!province){
      throw fail(400, {message: "first name require"}, first_name, last_name, dob, mobile_number)
    }

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
  },
  
  logout: async ({ cookies }) => {
    cookies.set("access", "", {
      path: "/",
      expires: new Date(0)
    })

    throw redirect(302, "/")
  }
}