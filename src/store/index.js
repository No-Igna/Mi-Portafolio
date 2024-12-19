import { createStore } from "vuex"

const store = createStore({
  state() {
    return {
      projects: [
        {
          id: 'Quien-es-ese-Pokemon',
          title: '¿Quien es ese Pokemon?',
          url: 'https://examen-quien-es-ese-pokemon.vercel.app',
          img: '/img/PokeApi.webp',
          detail: 'Aplicación web que hace uso de la PokéAPI para generar 20 Pokémon de forma aleatoria y que el usuario tenga que adivinar el nombre para mostrar al Pokémon oculto detrás de la silueta.'
        },
        {
          id: 'Prueba-de-login',
          title: 'Prueba de login',
          url: 'https://desafio-firebase-ii-93527.web.app/',
          img: '/img/Login.webp',
          detail: 'Aplicación web que hace uso de la creación de usuarios y hosting en Firebase, solo permite el acceso al contenido de esta si el usuario realiza el inicio de sesión.'
        },
      ],
      educacion: [
        {
          title: 'Desarrollo de aplicaciones front-end trainee v2.0',
          completed: true,
          institution: 'Talento Digital',
          date: '2024',
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
    }
  },
  getters: {
    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === id);
    }
  }
})

export default store