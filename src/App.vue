<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container py-5">
    <Navbar />
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.container {
  min-height: 100vh;
  padding-bottom: 50px;
}
</style>