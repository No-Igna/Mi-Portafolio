<template>
  <div class="container p-5 formation">
    <h2 class="formation__title">Formación</h2>
    <p class="formation__subtitle" v-if="loading">Cargando...</p>
    <ul v-else class="formation__list">
      <li class="formation__item" v-for="(edu, index) in educacion" :key="index"
        :class="{ 'formation__item--incomplete': !edu.completed }">
        <h3 class="formation__subtitle">{{ edu.title }}</h3>
        <p class="formation__text">{{ edu.date }} | {{ edu.institution }}</p>
        <span v-if="!edu.completed" class="formation__incomplete">Pendiente</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Formacion',
  computed: {
    ...mapState(['educacion'])
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      console.log(this.educacion);
      
      this.loading = false;
    }, 200);
  }
};
</script>

<style scoped></style>