import Vue from 'vue'
import Vuex from 'vue'
// import store from './modules/store'


Vue.use(Vuex);
const debug = process.env.Node_ENV !== "production";

export default new Vuex.Store({
    modules :{ //used to import files 
        // store
    },
    strict: debug,
});
