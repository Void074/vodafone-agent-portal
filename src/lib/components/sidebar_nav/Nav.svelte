<script>
  let src = '/images/vodafone-logo.png'
</script>
<nav>
  <ul>
    <li class="brand">
      <img src={src} alt="vodafone-logo.png" width="200" height="200"/>
    </li>
  </ul>
  <ul>
    <li><a class="link" href="/agents/dashboard">Customers</a></li>
    <li><a class="link" href="/agents/search">Customer Search</a></li>
    <li><a class="link" href="/agents/register">Register Mobile Number</a></li>
    {#if $$slots.logout}
      <slot name="logout">
      </slot>
    {/if}
  </ul>
</nav>

<style>
  nav {
    position: relative;
    top: 65px;
    padding: 10px;
    width: 300px;
    height: 100vh;
  }

  .brand {
    text-align: center;
    margin-bottom: 3%;
  }

  .link {
    color: white;
  }

  .link:hover {
    background-color: #ff001b;
  }
</style>