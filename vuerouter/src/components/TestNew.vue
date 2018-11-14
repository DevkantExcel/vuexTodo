<template>
<div>
    <!-- <img alt="Vue logo" src="./../assets/logo.png"> -->
    <h1>You have been redirected from hOME to TestNew page see the URL</h1>
    <button @click="goHome">Go back to home</button>
    <!-- <p>Route Id : {{ $route.params.id }} </p> -->
</div>
</template>

<script>
export default {
name: 'TestNew',
methods: {
    goHome: function() {
        this.$router.push('/')
    }
}
}
</script>

<style>

</style>
