<script>
  import { onMount } from 'svelte'

  let query = []
  export let serach_query = ''


  async function fetchData(){
    const res = await fetch(`https://dapper-bunny-7f59c6.netlify.app/api/customers/search?mobile=${serach_query}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://vodafone-agent-portal.netlify.app'
      }
    })

    query = await res.json()
    console.log(query)
    return query
  }

  // -> Need to better understand this line of coder
  onMount(() => {
    fetchData()
  })

</script>

<hgroup class="text--center">
  <h3>Customer Search</h3>
  <p>Enter mobile number of customer</p>
</hgroup>
<form method="POST" on:submit|preventDefault={fetchData}>
  <div class="grid">
    <input type="search" name="mobile" id="search" bind:value={serach_query} placeholder="search...">
    <button class="contrast">Search</button>
  </div>
  <section>
    <table>
      <tr>
        <th>Name</th>
        <th>Province</th>
        <th></th>
      </tr>
      <tr>
        {#if query.length}
          {#each query as q}
           <td>{q.first_name} {q.last_name}</td>
           <td>{q.province}</td>
           <!-- svelte-ignore a11y-invalid-attribute -->
           <td><a href="/agents/search/{q.id}">View Profile</a></td>
          {/each}
        {:else}
            <td class="message text--center" colspan="3">No results to display</td>
        {/if}
      </tr>
    </table>
  </section>
</form>

<style>
  .message {
    padding: 45px;
  }
</style>