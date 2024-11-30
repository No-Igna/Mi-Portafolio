import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/HomeView.vue'),
    },
    {
      path: '/formacion',
      name: 'formacion',
      component: () => import('../views/FormacionView.vue'),
    },
    {
      path:'/proyectos',
      name:'proyectos',
      component:()=> import('../views/ProjectsView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name:'page not found',
      component: () =>import('../views/PageNotFoundView.vue'),
    },
  ],
})

export default router
