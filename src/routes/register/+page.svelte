<script>
  import Register from "$lib/components/register/AgentForm.svelte";
  let src = 'images/vodafone-logo.png'

  export let data
  const { name, role } = data
</script>
<svelte:head>
  <title>Agent Registration Form</title>
</svelte:head>

<div class="register__section">
  <p>You are logged in as {name} with a user role of {role}</p>
  <div class="logo">
    <img src={src} alt="vodafone-logo.png" width="300" height="400"/>
  </div>
  <hgroup class="text--center">
    <h2>Agent Registration Form</h2>
    <p>Enter your details to register</p>
  </hgroup>
  <Register/>
  <section>
      <a href="/">Return to Login Page</a>
  </section>
</div>

<style>
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