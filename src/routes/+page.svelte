<script>
	import { enhance } from '$app/forms';
  let src = '/images/vodafone-logo.png'
  export let form
</script>

<svelte:head>
  <title>Vodafone Agent Portal</title>
</svelte:head>

<div>
  <div class="login__container">
    <article class="grid login__content">
      <div>
        <h3>Guria Labs</h3>
        <p>Building composable Web Application and Sites</p>
      </div>
      <div>
        <h5 class="text--center">Enter your credentials</h5>
          {#if form?.missing}
            <div class="error">
              {form.message}
            </div>
          {/if}
          {#if form?.credentials}
            <div class="error">
              {form.message}
            </div>
          {/if}
        <form method="POST" action="?/user_login" use:enhance>
          <input type="text" name="username" id="username" value={form?.username ?? ''} placeholder="Username" />
          <input type="password" name="current_password" id="current_password" value={form?.password ?? ''} placeholder="Password" />
          <button class="contrast">Sign in</button>
        </form>
        <div class="text--center">
          <!-- <a href="/register">Register Here</a> -->
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
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  
    .login__content {
      height: 500px;
      width: 100%;
    }
  </style>
</div>