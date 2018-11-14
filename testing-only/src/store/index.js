import Vuex from  'vuex';
import Vue from 'vue';

Vue.use(Vuex)
import data from '../api/data.js'
export default new Vuex.Store({
    state: { //data, go to mutation to make changes here
        students : [],
        teamA: [],
        teamB: []
    },
    getters: { //computed properties

    },
    actions: { //methods, never change state via actions
        getStudents(context){ //
            context.commit('setStudents')
        },
        addTeamMember(context, data){
            context.commit('pushMemberToTeam', data);
        }
    },
    mutations: { //used for changing state or data, state can only be changed here 
        setStudents(state) {
            state.students = data.getStudents()
        },
        pushMemberToTeam(state, data) {
            if(data.type === 'A') {
                state.teamA.push(state.students[data.index])
            } else {
                state.teamB.push(state.students[data.index])                
            }
        }        
    }
})