<script>
  export let data 
  console.log(data)
</script>

<svelte:head>
  <title>Customer Profile | {data.profile.first_name}</title>
</svelte:head>

<hgroup class="text--center">
  <h3>Customer Profile</h3>
  <p>Details</p>
</hgroup>
<table role="grid">
  <tr>
    <th>Name</th>
    <td>{data.profile.first_name}</td>
  </tr>
  <tr>
    <th>Gender</th>
    <td>{data.profile.gender}</td>
  </tr>
  <tr>
    <th>Date of Birth</th>
    <td>{data.profile.date_of_birth}</td>
  </tr>
  <tr>
    <th>Province</th>
    <td>{data.profile.province}</td>
  </tr>
  <tr>
    <th>Mobile</th>
    <td>{data.profile.mobile_number}</td>
  </tr>
  <tr>
    <th>Address</th>
    <td>{data.profile.address}</td>
  </tr>
</table>

<section>
  <a role="button" class="constrast" href="/agents/search">Return to Search</a>
</section>