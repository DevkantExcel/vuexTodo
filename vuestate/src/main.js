import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'

import VueRouter from 'vue-router'
import Todo from './components/Todo.vue';

Vue.use(VueRouter)

Vue.config.productionTip = false
// code for router 
const routes = [{
    path: "/",
    component: Todo,
  },
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  router: router,
  render: h => h(App),
  store
}).$mount('#app')