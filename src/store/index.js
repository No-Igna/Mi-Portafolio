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
          id: 'Chat-de-api',
          title: 'Chat entre usuarios traidos con API',
          url: 'https://desafio-consumo-api-rest.vercel.app/',
          img: '/img/Login.png',
          detail: 'Aplicacion web que hace uso de la API Random user generator, para obtener 2 usuarios diferentes y con estos poder simular un chat entre ellos.'
        },
        {
          id: 'Administrador-de-citas',
          title: 'Administrador de citas medicas',
          url: 'https://desafio-consumo-api-rest.vercel.app/',
          img: '/img/AdministradorDeCitas.png',
          detail: 'Aplicacion web en la cual al llenar el formulario, se genera una carta con los datos de la cita medica, dandoles un color caracteristico dependiendo de la gravedad que presente el paciente.'
        },
        {
          id: 'Animales-en-Investigacion',
          title: 'Animales en Investigacion',
          url: 'https://no-igna.github.io/Prueba---Programacion-avanzada-en-JavaScript/',
          img: '/img/AnimalesEnInvestigacion.png',
          detail: 'Aplicacion web en la cual al llenar el formulario, se genera una carta dependiento del animal seleccionado, contando con una imagen de este y su sonido caracteristico, al presionarla se mostrara nuevamente la imagen en un mayor tamaño, su edad y comentarios relevantes.'
        },
        {
          id: 'SuperHero-API',
          title: 'SuperHero API',
          url: 'https://no-igna.github.io/Prueba-Fundamentos-de-programacion-en-JavaScript/',
          img: '/img/SuperHeroAPI.png',
          detail: 'Aplicacion web con la cual se realiza un llamado a la API SuperHero API y esta devuelve un personaje, para mostrar sus datos en pantalla.'
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