<template>
  <Navbar/>
  <Projects :projects="projects" />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Projects from '@/components/Projects.vue';
import { mapState } from 'vuex';

export default {
  name: 'ProjectsView',
  components:{
    Navbar,Projects
  },
  computed:{
    ...mapState(['projects'])
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>