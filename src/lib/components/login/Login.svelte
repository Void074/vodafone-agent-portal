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
      <h5 class="text--center">Enter your credentials</h5>
      <form method="POST" action="?/user_login">
        <input type="text" name="username" id="username" placeholder="Username">
        <input type="password" name="current_password" id="current_password" placeholder="Password">
        <button class="contrast">Sign in</button>
      </form>
        {#if $$slots.error_message}
          <div class="error">
            <slot class="error" name="error_message">
            </slot>
          </div>
        {/if}
      <div class="text--center">
        <a href="/register">Click here to Regsiter</a>
      </div>
    </div> 
  </article>
</div>

<style>
  .error {
    padding: 15px;
    text-align: center;
    color: red; 
  }

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
    height: 460px;
    width: 100%;
  }
</style>