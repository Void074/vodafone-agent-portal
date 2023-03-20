<form method="POST" action="?/register_user" class="register__form">
  <input type="text" name="first_name" id="first_name" placeholder="First name" required/>
  <input type="text" name="last_name" id="last_name" placeholder="Last name" required/>
  <input type="text" name="username" id="username" placeholder="Username" required/>
  <input type="password" name="new_password" id="new_password" placeholder="Password" required/>
  <input type="password" name="verify_password" id="verify_password" placeholder="Verify Password" required/>
  <button class="contrast">Register</button>
</form>

<style>
  .register__form {
    width: 50%;
  }
</style>