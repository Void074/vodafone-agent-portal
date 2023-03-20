<form method="POST" action="?/customer_register">
  <hgroup class="text--center">
      <h3>SIM Registration Form</h3>
      <p>Enter cusomter details below</p>
  </hgroup>
  <div class="grid">
      <input type="text" name="first_name" id="first_name" placeholder="First Name" required>
      <input type="text" name="last_name" id="last_name" placeholder="Last Name" required>
  </div>
  <label for="dob">
      Date of Birth
      <input type="date" name="dob" id="dob" required/>
  </label>
  <fieldset>
      <legend>Gender</legend>
      <label for="male">
      <input type="radio" name="gender" id="male" value="male" checked >
          Male
      </label>
      <label for="female">
          <input type="radio" name="gender" id="female" value="female">
          Female
      </label>
  </fieldset>
  <input type="text" name="msisdn" id="msidsn" placeholder="Mobile Number" required>
  <select name="province" id="province">
      <option value="" selected>Select Province</option>
      <option value="Central">Central</option>
      <option value="East Sepik">East Sepik</option>
      <option value="Gulf">Gulf</option>
      <option value="Morobe">Morobe</option>
      <option value="National Captial District">National Capital District</option>
  </select>
  <button class="contrast">Register</button>
</form>