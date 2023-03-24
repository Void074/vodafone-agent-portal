<script>
  export let data
  console.log(data)
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<hgroup class="text--center">
  <h3>Customers</h3>
  <p>Registerd customers</p>
</hgroup>
<table>
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Province</th>
      <th></th>
    </tr>
      {#each data.customers as customer }
      <tr>
        <td>{customer.first_name} {customer.last_name}</td> 
        <td>{customer.gender}</td>
        <td>{customer.province}</td>
        <td><a href="/dashboard/details/{customer.id}">View Info</a></td>
      </tr>
      {/each}
</table>
