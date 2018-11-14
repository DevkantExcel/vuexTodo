<template>
  <div id="app">
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <!-- <router-link to="/TestNew/id">/TestNew/id/</router-link> -->

    <!-- <p>I am from app dot vue = {{ $route.params.id }} <--value from url</p> -->
    <router-link to="/UserProfile">User Profile</router-link> <br /> 
    <router-link to="/UserProfile/UserPost">User Posts</router-link> <br /> 
    <router-link to="/UserProfile/UserSettings">User Settings</router-link> <br /> 
    
    
  </div>
</template>

<script>

export default {
  name: 'app',
  
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
