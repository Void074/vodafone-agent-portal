<script>
  let src = '/images/vodafone-logo.png'
</script>

<div class="login__container">
  <article class="grid login__content">
    <div>
      <div class="login__logo--centered">
        <img src={src} alt="vodafone-logo.png"/>
      </div>
      <hgroup>
        <h4 class="text--center">Together we can</h4>
        <h3 class="text--center">Agent Portal</h3>
      </hgroup>
    </div>
    <div>
      <form>
        <h5 class="text--center">Enter your credentials</h5>
        <input type="text" name="username" id="username" placeholder="Username">
        <input type="password" name="current_password" id="current_password" placeholder="Password">
        <button class="contrast" on:click|preventDefault>Sign in</button>
        <a class="text--center" href="/register">Register Here</a>
      </form>
    </div> 
  </article>
</div>

<style>
  .login__logo--centered {
    display: flex;
    margin-bottom: 15px;
    flex-direction: row;
    height: 50%;
    justify-content: center;
  }

  .login__container {
    height: 109vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .login__content {
    height: 450px;
    width: 100%;
  }
</style>