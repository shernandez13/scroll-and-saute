<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>
