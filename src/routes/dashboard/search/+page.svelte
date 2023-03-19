<script>
  export let form
  console.log(form)
</script>
<hgroup class="text--center">
  <h3>Customer Search</h3>
  <p>Enter name of customer</p>
</hgroup>
<form method="POST" action="?/result">
    <input type="search" name="name" id="search" placeholder="search...">
    <button class="contrast">Search</button>
</form>