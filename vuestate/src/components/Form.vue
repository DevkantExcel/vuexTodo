<template>
<div class="customWidth">
   <v-app id="inspire">
    <form>
      <v-text-field
        v-model="name"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>
      
      <v-btn @click="submit">submit</v-btn>
    </form>
  </v-app>
</div>
    
</template>

<script>
export default {
  name: "Form",
  data: function() {
    return {
      name: "",
      email: ""
    };
  },
  methods: {
    submit: function() {}
  }
};
</script>

<style scoped>
.customWidth {
  width: 35%;
  margin: 0 auto;
}
</style>
