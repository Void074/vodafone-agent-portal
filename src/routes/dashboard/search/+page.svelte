<script>
  export let form
</script>
<hgroup class="text--center">
  <h3>Customer Search</h3>
  <p>Enter mobile number of customer</p>
</hgroup>
<form method="POST" action="?/result">
      <div class="grid">
        <input type="search" name="name" id="search" placeholder="search...">
        <button class="contrast">Search</button>
      </div>
      <div>
        {#if form?.name}
          <p>Searching for: {form.name}</p>
        {/if}
      </div>
</form>