<template>
  <article class="container p-5 hero">
    <h1 class="hero__title">Soy José Ignacio Pérez</h1>
    <h3 class="hero__subtitle">Desarrollador FrontEnd</h3>
    <p class="hero__text">Trabajo principalmente con Vue.js, tambien tengo experiencia con el uso de herramientas de
      control de versiones como Git y desplieuge de aplicaciones en plataformas como Vercel.</p>
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
export default {
  name: 'HomeView',
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          icon: 'fa-brands fa-html5',
          color: '#DD4B25',
        },
        {
          name: 'CSS',
          icon: 'fa-brands fa-css3-alt',
          color: '#379AD6',
        },
        {
          name: 'Sass',
          icon: 'fa-brands fa-sass',
          color: '#CD669A',
        },
        {
          name: 'Bootstrap',
          icon: 'fa-brands fa-bootstrap',
          color: '#533B78',
        },
        {
          name: 'Git',
          icon: 'fa-brands fa-git-alt',
          color: '#F05030',
        },
        {
          name: 'GitHub',
          icon: 'fa-brands fa-github',
          color: '#000',
        },
        {
          name: 'JavaScript',
          icon: 'fa-brands fa-js',
          color: '#E8D44D',
        },
        {
          name: 'Vue',
          icon: 'fa-brands fa-vuejs',
          color: '#3FB27F',
        },
      ],
    };
  }
};
</script>

<style lang="scss" scoped>
$title-color: #ececec;
$subtitle-color: #FFDE88;
$text-color: #a6d6ec;

.hero {

  &__title {
    color: $title-color;
    font-weight: 700;
    text-shadow: #333 5px 5px 7px
  }

  &__subtitle {
    color: $subtitle-color;
    font-weight: 500;
    text-shadow: #333 6px 5px 2px
  }

  &__text {
    color: $text-color;
    font-weight: 300;
    font-size: 1.4rem;
  }
}

.skill {
  &__title {
    color: $title-color;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  &__card {
    border-radius: 10px;
    padding: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &__card:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    transform: scale(1.01);
    border: 1px solid $subtitle-color;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &__card-icon {
    font-size: 2.5rem;
  }

  &__card-text {
    font-size: 1.1rem;
  }

  &__icon {
    font-size: 2rem;
    transition: transform 0.3s ease;
  }

  &__icon:hover {
    transform: scale(1.2);
  }

  &__text {
    color: $text-color;
    font-weight: 300;
    font-size: 1.4rem;
  }
}
</style>