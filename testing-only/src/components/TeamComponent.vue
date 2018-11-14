<template>
    <div>
        <h2>Team {{ type }} </h2>
        <ul>
            <li v-for="(member, index) in team" :key="index">
                {{ member.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import store from "../store/index";
export default {
    props: ['type'],
    computed: {
        team(){
            return this.type === 'A'? store.state.teamA : store.state.teamB;
        }
    }
}
</script>

<style>

</style>
