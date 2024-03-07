import Vue from 'vue'
import Vuex from 'vuex'
import departamentos from './departamento_module'
import empleados from './empleados_module'
import turnos from './turnos_module'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    departamentos,
    empleados,
    turnos

  },
})
