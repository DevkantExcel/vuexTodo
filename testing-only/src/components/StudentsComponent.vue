<template>
  <div>
    <h1>Students</h1>
    <ul>
      <li v-for="(student, index) in students" :key="student.id" >
        {{ student.name }}
        <i> {{ student.games.length }} game he plays</i> 
        <button @click="addTeamMember('A', index)" >Team A</button>
        <button @click="addTeamMember('B', index)" >Team B</button>
      </li>
    </ul>
    <hr>

    <TeamComponent type='A'>Team A</TeamComponent>
    <TeamComponent type='B'>Team B</TeamComponent>

  </div>
</template>

<script>
import TeamComponent from './TeamComponent.vue';
import store from '../store/index.js';
export default {
// data - return - students array gone
  components: { TeamComponent },
  methods: {
    addTeamMember(type, index){
      store.dispatch('addTeamMember',{type, index});
    }
  },
  computed:{
    students() {
      return store.state.students
    }
  },
  created(){
    store.dispatch('getStudents');  
  },
};
</script>

<style>

</style>
