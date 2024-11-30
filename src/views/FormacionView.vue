<template>
  <div class="container p-5 about">
    <h2 class="about__title">Formación</h2>
    <p class="about__subtitle" v-if="loading">Cargando...</p>
    <ul v-else class="about__list">
      <li class="about__item" v-for="(edu, index) in educacion" :key="index"
        :class="{ 'about__item--incomplete': !edu.completed }">
        <h3 class="about__subtitle">{{ edu.title }}</h3>
        <p class="about__text">{{ edu.date }} | {{ edu.institution }}</p>
        <span v-if="!edu.completed" class="about__incomplete">Pendiente</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FormacionView',
  data() {
    return {
      loading: true,
      educacion: [
        {
          title: 'Desarrollo de aplicaciones front-end trainee v2.0',
          completed: false,
          institution: 'Talento Digital',
          date: '2024 - actual',
        },
        {
          title: 'Ingeniería civil en informática',
          completed: false,
          institution: 'Universidad Autónoma de Chile',
          date: '2016 - 2022',
        },
        {
          title: 'Técnico de nivel medio en Mecánica industrial',
          completed: true,
          institution: 'Liceo Vicente Pérez Rosales',
          date: '2012 - 2015',
        }
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
};
</script>

<style lang="scss" scoped>
$title-color: #ececec;
$subtitle-color: #FFDE88;
$text-color: #a6d6ec;
$incomplete-bg-color: rgba(255, 0, 0, 0.1);
/* Color de fondo para los ítems no completados */
$incomplete-color: #ff5733;
/* Color para el texto de "Pendiente" */

.about {
  &__title {
    color: $title-color;
    font-weight: 700;
    text-shadow: #333 5px 5px 7px;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-left: 4px solid $subtitle-color;
    padding-left: 1.5rem;
  }

  &__item {
    background: linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.2));
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    &--incomplete {
      background-color: $incomplete-bg-color;
      border-left: 4px solid $incomplete-color;
    }
  }

  &__subtitle {
    color: $subtitle-color;
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 40%;
      height: 2px;
      background: $subtitle-color;
      border-radius: 4px;
      transition: width 0.5s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  &__text {
    color: $text-color;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8;
    text-align: justify;
    margin: 0.8rem 0.5rem;
    background: linear-gradient(to right, #a6d6ec, #ececec);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__incomplete {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: $incomplete-bg-color;
    color: $incomplete-color;
    font-weight: 600;
    border-radius: 8px;
    font-size: 1.1rem;
  }
}
</style>