import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import store from './store'
// import Test from './components/Test.vue';
// import TestNew from './components/TestNew.vue';
import UserProfile from './components/UserProfile.vue';
import UserPost from './components/UserPost.vue';
import UserSettings from './components/UserSettings.vue';

Vue.use(VueRouter)


Vue.config.productionTip = false

//code for router
const routes = [
  {path: "/UserProfile", component: UserProfile,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: 'UserPost', component: UserPost },
      { path: 'UserSettings', component: UserSettings },

      // ...other sub routes
    ]
  },
  // {path: '/TestNew/:id',component: TestNew}
]
const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  router: router,
  render: h => h(App),
  // store,
}).$mount('#app')
