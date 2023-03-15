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
    <li><a class="link" href="/dashboard">Customers</a></li>
    <li><a class="link" href="/dashboard/search">Search</a></li>
    <li><a class="link" href="/dashboard/register_simcard">SIM Registration</a></li>
    <li><a class="link" href="/">Logout</a></li>
  </ul>
</nav>

<style>
  nav {
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