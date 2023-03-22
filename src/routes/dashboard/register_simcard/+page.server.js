import { redirect, fail } from '@sveltejs/kit'

export const load = ({ cookies }) => {
  if ( !cookies.get("access")){
    return redirect(307, `/`)
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
      return fail(400, {
        missing: true, 
        message: "first name required!", 
        last_name, 
        dob, 
        gender, 
        mobile_number, 
        province
      })
    }
    
    if(!last_name){
      return fail(400, {
        missing: true, 
        message: "last name require!", 
        first_name, 
        dob, 
        gender, 
        mobile_number, 
        province
      })
    }

    if(!dob){
      return fail(400, {
        missing: true, 
        message: "date of birth required!", 
        first_name, 
        last_name,
        gender, 
        mobile_number, 
        province
      })
    }

    if(!gender){
      return fail(400, {
        missing: true, 
        message: "gender required!", 
        first_name, 
        last_name, 
        dob, 
        mobile_number, 
        province
    })
    }

    if(!mobile_number){
      return fail(400, {
        missing: true, 
        message: "mobile number required!", 
        first_name, 
        last_name, 
        dob, 
        gender, 
        province
      })
    }

    if(!province){
      return fail(400, {
        missing: true, 
        message: "first name require", 
        first_name, 
        last_name, 
        dob,
        mobile_number
      })
    }

    /* end of validation */
    /* TODO(Gedare): find a better way of validating form fields */

    const res = await fetch('http://localhost:3001/api/customers', {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        gender,
        dob,
        mobile_number,
        province,
        user_id: 2
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    
    const customer_data = await res.json()
    return customer_data

  },
  
  logout: async ({ cookies }) => {
    cookies.set("access", "", {
      path: "/",
      expires: new Date(0)
    })

    throw redirect(302, "/")
  }
}