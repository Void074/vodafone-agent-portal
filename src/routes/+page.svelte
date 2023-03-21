<script>
  import Login from "$lib/components/login/Login.svelte";
  export let form
</script>
<svelte:head>
  <title>Vodafone Agent Portal</title>
</svelte:head>
<div>
  <Login> 
      <span slot="error_message">
        {#if form?.message}
          {form.message}
        {/if}
      </span>
  </Login>
</div>