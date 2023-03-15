<script>
  let src = 'images/vodafone-logo.png'
  import Register from "$lib/components/register/Register.svelte";
</script>

<div class="register__section">
  <div class="logo">
    <img src={src} alt="vodafone-logo.png" width="300" height="400"/>
  </div>
  <hgroup class="text--center">
    <h2>Agent Registration Form</h2>
    <p>Enter your details to register</p>
  </hgroup>
  <Register/>
  <section>
      <a href="/">click here to return</a>
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