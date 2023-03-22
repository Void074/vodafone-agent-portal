<script>
  let src = 'images/vodafone-logo.png'
  export let form
</script>

<svelte:head>
  <title>Agent Registration Form</title>
</svelte:head>

<div class="register__section">
  <div class="logo">
    <img src={src} alt="vodafone-logo.png" width="300" height="400"/>
  </div>
  <hgroup class="text--center">
    <h2>Agent Registration Form</h2>
    <p>Enter your details to register</p>
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
  <!-- importing register form here -->
  <form method="POST" action="?/agent" class="register__form">
    <input type="text" name="first_name" value={form?.first_name ?? ''} id="first_name" placeholder="First name"/>
    <input type="text" name="last_name" value={form?.last_name ?? ''} id="last_name" placeholder="Last name" />
    <input type="text" name="user_name" value={form?.user_name ?? '' } id="username" placeholder="Username" />
    <input type="password" name="new_password" id="new_password" placeholder="Password" />
    <input type="password" name="verify_password" id="verify_password" placeholder="Verify Password" />
    <button class="contrast">Register</button>
  </form>
  
  <section>
      <a href="/">Return to Login Page</a>
  </section>
</div>

<style>
  .success {
    padding: 10px;
    color: green;
  }

  .error {
    padding: 10px;
    color: red;
  }

  .logo {
    margin-bottom: 25px;
  }

 .register__section {
  margin-top: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 } 

 .register__form {
    width: 50%;
  }
</style>