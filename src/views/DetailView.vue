<template>
  <Navbar />
  <article class="container p-5 detail" v-if="project">
    <div class="row">
      <div class="col-12 col-md-8">
        <h2 class="detail__title">{{ project.title }}</h2>
        <img :src="project.img" class="detail__img" alt="Project Image">
        <a :href="project.url" class="mt-3 detail__link" target="_blank">Ver proyecto</a>
      </div>
      <div class="col-12 col-md-4">
        <p class="detail__text"> {{ project.detail }}</p>
      </div>
    </div>
  </article>
  <div class="container errorPage" v-else>
    <h2 class="errorPage__title">404 - proyecto no encontrado</h2>
    <p class="errorPage__message">
      Lo sentimos, no hemos podido encontrar el proyecto que estás buscando. ¡Vuelve al inicio y explora otras secciones!
    </p>
    <RouterLink to="/" class="errorPage__button">
      Regresar al inicio
    </RouterLink>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'DetailView',
  components: { Navbar },
  props: ['id'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getProjectById']),
    
    project() {
      return this.getProjectById(this.id);
    }
  }
};
</script>

<style scoped>
</style>