<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <test></test> -->
    <!-- <List></List> -->
    <!-- <simpleform></simpleform> -->
    <todo></todo>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import test from './components/test.vue';
// import List from './components/List.vue';
// import simpleform from './components/simpleform.vue';
import todo from './components/todo.vue';
export default {
  name: 'app',
  components: {
    // HelloWorld, 
    // test,
    // List,
    // simpleform
    todo
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
