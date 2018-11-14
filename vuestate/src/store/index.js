import Vue from 'vue'
import Vuex from 'vuex'
import store from './modules/store'
import createPersistedState from 'vuex-persistedstate';

const debug = process.env.Node_ENV !== "production";
Vue.use(Vuex)
export default new Vuex.Store({
    modules: { //used to import files 
        store
    },
    strict: debug,
    plugins: [createPersistedState()]
});