<script>
  import Register from "$lib/components/register/AgentForm.svelte";
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
  {#if form?.message}
    <div class="error text--center">
      {form.message}
    </div>
  {/if}
  <!-- importing register form here -->
  <Register/>
  <section>
      <a href="/">Return to Login Page</a>
  </section>
</div>

<style>
  .error {
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
</style>