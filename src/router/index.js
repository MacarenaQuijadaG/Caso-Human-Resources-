import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DepartamentosView from '@/views/DepartamentosView.vue'
import EmpleadosView from '@/views/EmpleadosView'
import TurnosView from '@/views/TurnosView'
import NotFoundView from '@/views/NotFoundView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/departamentos',
    name: 'departamentos',
    component: DepartamentosView
  },

  {
    path: '/empleados',
    name: 'empleados',
    component: EmpleadosView
  },

  {
    path: '/turnos',
    name: 'turnos',
    component: TurnosView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  
  {
    path:'/:catchAll(.*)',
    name: 'notfound',
    component:NotFoundView
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
