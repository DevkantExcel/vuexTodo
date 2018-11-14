<template>
   <div id="app">
       <p>type something.....</p>
        <i>press enter</i>
        <br />

        <form v-on:submit.prevent>
            <input type="text" v-on:keypress="submit" v-model="name" autofocus>
        </form>
        
        <ul>
            <li v-for="(item, index) in data" v-bind:key="index" >
               <span> {{ item }} </span>
               <button @click.prevent="delItem(index)">Delete</button>
               <button @click.prevent="editItem(index)">Edit</button>
            </li>
        </ul>
   </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'test',
    data: function(){
        return {
           name: '',
           data:[],
           editIndex: false            
        }
    },
    methods: {
        submit: function(e) {
            if (e.keyCode === 13) {
                if (this.editIndex) {
                     // this.data.splice(this.editIndex,1,this.name);
                     //split also works fine, but just trying out Vue.set
                     Vue.set(this.data, this.editIndex, this.name);
                     this.name = "";
                     this.editIndex = -1;
                } else {
                     this.data.push(this.name);
                     this.name = "";
                }
            }
        },
        delItem: function(index){
            this.$delete(this.data, index)
        },
        editItem: function(index){
            this.editIndex = index;
            this.name = this.data[index];
        } 
    }
};
</script>

<style>
    #app li {
        border: 1px solid green;
        padding: 5px;
    }
    #app button {
        float: right;
    }
</style>
