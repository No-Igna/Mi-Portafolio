<template>
  <Navbar/>
  <Home/>
</template>

<script>
import Home from '@/components/Home.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'HomeView',
  components:{
    Navbar, Home
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>