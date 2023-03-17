<form>
  <hgroup class="text--center">
      <h3>SIM Registration Form</h3>
      <p>Enter cusomter details below</p>
  </hgroup>
  <div class="grid">
      <input type="text" name="first_name" id="first_name" placeholder="First Name">
      <input type="text" name="last_name" id="last_name" placeholder="Last Name">
  </div>
  <label for="dob">
      Date of Birth
      <input type="date" name="dob" id="dob" />
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
  <input type="text" name="msisdn" id="msidsn" placeholder="Mobile Number">
  <select id="province">
      <option value="" selected>Select Province</option>
      <option value="central">Central</option>
      <option value="esp">East Sepik</option>
      <option value="gulf">Gulf</option>
      <option value="morobe">Morobe</option>
      <option value="ncd">National Capital District</option>
  </select>
</form>