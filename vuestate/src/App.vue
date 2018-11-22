<template>
  <v-app>
    <!-- navbar -->
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand"><router-link to="/">Home</router-link> <br /></a>
        </div>
      <ul class="nav navbar-nav">
        <!-- <li><router-link to="/Todo">Todo Form</router-link> <br /> </li> -->
        <li><router-link to="/YourTodo">Your Todos</router-link> <br /> </li>
      </ul>
      </div>
</nav>
    <router-view to="/Todo"></router-view>
  </v-app>
</template>

<script>
import Todo from "./components/Todo.vue";
export default {
  name: "App",
  components: {}
};
</script>
<style>
.center {
  text-align: center;
}
.application--wrap {
  color: aliceblue;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  background-color: darkkhaki;
}
</style>
