<template>
  <div class="container projects mt-4">
    <p v-if="projects.length === 0" class="projects__loading">Cargando proyectos...</p>
    <div v-else class="masonry px-5">
      <div class="card masonry__item" v-for="(proyecto, index) in projects" :key="index">
        <img :src="proyecto.img" class="card-img masonry__img" :alt="proyecto.title">
        <div class="card-img-overlay align-content-lg-between masonry__overlay">
          <h5 class="card-title">{{ proyecto.title }}</h5>
          <RouterLink :to="'/proyectos/' + proyecto.id" class="btn btn-light">Ver más</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProjectsView',
  props: ['projects'],
  data() {
    return {
    };
  },

};
</script>

<style>
</style>