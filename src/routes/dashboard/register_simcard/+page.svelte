<script>
  export let form
  console.log(form)
</script>
<svelte:head>
    <title>SIM Registration Form</title>
</svelte:head>
<form method="POST" action="?/customer_register">
  <hgroup class="text--center">
      <h3>SIM Registration Form</h3>
      <p>Enter cusomter details below</p>
  </hgroup>
  {#if form?.missing}
    <div class="error text--center">
      {form.message}
    </div>
  {/if}
  {#if form?.success}
    <div class="success text--center">
      {form.message}
    </div>
  {/if}
  <div class="grid">
      <input type="text" name="first_name" value={form?.first_name ?? ''} id="first_name" placeholder="First Name" />
      <input type="text" name="last_name" value={form?.last_name ?? ''} id="last_name" placeholder="Last Name" />
  </div>
  <label for="dob">
      Date of Birth
      <input type="date" value={form?.dob ?? ''} name="dob" id="dob" />
  </label>
  <fieldset>
      <legend>Gender</legend>
      <label for="male">
      <input type="radio" name="gender" id="male" value="male" checked>
          Male
      </label>
      <label for="female">
          <input type="radio" name="gender" id="female" value="female">
          Female
      </label>
  </fieldset>
  <input type="text" name="msisdn" id="msisdn" value={form?.mobile_number ?? ''}  placeholder="Mobile Number" >
  <select name="province" id="province" value={form?.province ?? ''}>
      <option value="" selected>Select Province</option>
      <option value="Central">Central</option>
      <option value="East Sepik">East Sepik</option>
      <option value="Gulf">Gulf</option>
      <option value="Morobe">Morobe</option>
      <option value="National Captial District">National Capital District</option>
  </select>
  <button class="contrast">Register</button>
</form>

<style>
  .success {
    padding: 10px;
    color: green;
  }
  .error {
    padding: 10px;
    color: red;
  }
</style>