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
    path: '/registar/candidato',
    name: 'regCandidato',
    meta: { requiresAuth: true },
    component: () => import('../views/registo/RegistoView.vue'),
  },
  {
    path: '/registar/empresa',
    name: 'regEmpresa',
    meta: { requiresAuth: true },
    component: () => import('../views/registo/RegistoView.vue')
  },
  {
    path: '/registar/iensino',
    name: 'regIensino',
    meta: { requiresAuth: true },
    component: () => import('../views/registo/RegistoView.vue')
  },  
  {
    path: '/perfil/candidato',
    name: 'perfil_candidato',
    meta: { requiresAuth: true },
    component: () => import('../views/perfil/candidato/ProfileCandidatoView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router