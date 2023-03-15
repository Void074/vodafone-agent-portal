<script>
  import '../assets/app.css'
  import '@picocss/pico'
  import Footer from '$lib/components/footer/Footer.svelte'
</script>

<main class="container">
  <slot></slot>
  <Footer/>
</main>