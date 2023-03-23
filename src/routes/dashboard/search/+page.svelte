<script>
  export let form

  async function handleSubmit(event){
    const data = new FormData(event.target)
    const mobile = data.get('mobile')

    const res = await fetch(`https://dapper-bunny-7f59c6.netlify.app/api/customers/search?mobile=${mobile}`, {
      method: 'POST',
      headers: {
        'mode': 'CORS',
        'Content-Type': 'application/json'
      }
    })

    let profile = await res.json()
    console.log(profile)
    return profile
  }

  console.log(form)
</script>
<hgroup class="text--center">
  <h3>Customer Search</h3>
  <p>Enter mobile number of customer</p>
</hgroup>
<form method="POST" on:submit|preventDefault={handleSubmit}>
  <div class="grid">
    <input type="search" name="mobile" id="search" placeholder="search...">
    <button class="contrast">Search</button>
  </div>
  <section>
    
  </section>
</form>