<template>
  <v-app>
      <Todo/>
  </v-app>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo
  }
};
</script>
