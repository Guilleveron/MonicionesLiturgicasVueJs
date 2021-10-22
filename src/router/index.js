import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Inicio.vue')
  },
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  },
  {
    path: '/Ciclos',
    name: 'Ciclos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ciclos.vue')
  },
  {
    path: '/Moniciones',
    name: 'Moniciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Moniciones.vue')
  },
  {
    path: '/Monicion',
    name: 'Monicion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Monicion.vue')
  },
  {
    path: '/Buscar',
    name: 'Buscar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Buscar.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
