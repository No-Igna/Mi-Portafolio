<template>
  <article class="container p-5 hero">
    <h1 class="hero__title">Soy José Ignacio Pérez</h1>
    <h3 class="hero__subtitle">Desarrollador FrontEnd</h3>
    <p class="hero__text">Desarrollador Frontend. Con un largo camino por delante, así como mucho por descubrir, utilizo tecnologías como Vue.js, Vuex y Firebase.
      <br> Me considero una persona curiosa y autodidacta, siempre en busca de nuevos desafíos que me permitan crecer tanto profesional como personalmente.</p>
  </article>
  <section class="container px-5 skill">
    <section class="container col-12 my-3 pt-5 skill" id="skillsID">
      <h2 class="text-center skill__title">Mis habilidades</h2>
      <div class="row mt-5 justify-content-center">
        <div class="col-12 d-flex justify-content-between flex-wrap">
          <div v-for="(skill, index) in skills" class="skill__card d-flex align-items-center mb-4">
            <div class="skill__card-icon">
              <i :class="skill.icon" class="skill__icon" :style="{ color: skill.color }"></i>
            </div>
            <div class="skill__card-text ms-3">
              <span class="skill__text">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeView',
  computed:{
    ...mapState(['skills'])
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
</style>