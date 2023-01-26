import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login/LoginView.vue')
  },
  {
    path: '/registar',
    name: 'registar',
    component: () => import('../views/registo/RegistoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
