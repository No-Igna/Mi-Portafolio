<template>
  <Navbar/>
  <Formacion/>
</template>

<script>
import Formacion from '../components/Formacion.vue';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'FormacionView',
  components:{
    Navbar,Formacion,
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>