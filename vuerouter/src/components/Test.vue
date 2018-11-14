<template>
    <div>
         <button @click="click">Please Click Here page 1 Test vue</button>
         <p>This is Test.vue page first page 1</p>


        <router-view></router-view>
         <!-- <p>Route name : {{ $route.params.name }} </p>  -->

         <router-link to="/Test/TestNew">TestNew Page</router-link> <br /> 

        
    </div>
</template>
<script>
export default {
  name : "Test",
  methods: {
    click: function() {
        this.$router.push('TestNew')
    }
  }
}
</script>
<style>
</style>