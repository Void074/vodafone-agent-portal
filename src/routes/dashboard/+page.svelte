<script>
  export let data
  console.log(data)
</script>
<svelte:head>
  <title>Dashboard</title>
</svelte:head>
<hgroup class="text--center">
  <h3>Customers</h3>
  <p>Registerd SIM customers</p>
</hgroup>
<table>
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Province</th>
      <th></th>
    </tr>
    <tr>
      {#each data.customers as customer }
        <td>{customer.first_name} {customer.last_name}</td> 
        <td>{customer.gender}</td>
        <td>{customer.province}</td>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <td><a href="#">View Info</a></td>
      {/each}
    </tr>
</table>