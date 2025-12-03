<template>
  <footer class="app-footer py-3 mt-auto">
    <div class="container text-center text-white small">

      © {{ year }} Scroll &amp; Sauté · Built with Vue 3
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
