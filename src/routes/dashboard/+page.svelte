<script>
  export let data
  let { results } = data
</script>
<svelte:head>
  <title>Dashboard</title>
</svelte:head>
<hgroup class="text--center">
  <h3>Customers</h3>
  <p>Registerd SIM customers</p>
  <table>
    <tr>
      <th>Name</th>
      <th>Date of Birth</th>
      <th>Mobile Number</th>
      <th>Province</th>
    </tr>
  </table>
  {#each results as result}
    <tr>
      <td>{result.first_name} {result.last_name}</td>
      <td>{result.date_of_birth}</td>
      <td>{result.mobile_number}</td>
      <td>{result.province}</td>
    </tr>
  {/each}
</hgroup>