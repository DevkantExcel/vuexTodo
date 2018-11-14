<template>
    <div id="testing">
        <Form v-bind:edit-index="editIndex" v-bind:name="name" v-on:edit-item="edit" v-on:submit-item="submit" />
        <ul>
            <li v-for="(item, index) in data" v-bind:key="index">
                <span>{{item}}</span>
 
                 <a href="#" v-on:click.prevent="deleteItem(index)" >Delete</a>
                 <a href="#" v-on:click.prevent="editItem(index)" >Edit</a>
             </li>
         </ul>
     </div> 
 </template>
<script>
import Vue from "vue";
import Form from "./Form";
export default {
  name: "List",
  components: {
    Form
  },
  data: function() {
    return {
      data: [],
      name: "",
      editIndex: -1
    };
  },
  methods: {
    submit: function(name) {
      this.data.push(name);
      this.name = "";
    },
    edit: function(obj) {
      var { name, editIndex} = obj;
      // eslint-disable-next-line
      console.log("actual edit", name, editIndex);
      Vue.set(this.data, editIndex, name);
      this.name = "";
      this.editIndex = -1;
    },
    deleteItem: function(index) {
      this.data.splice(index, 1);
     },
     editItem: function(index) {
       // eslint-disable-next-line
      //  console.log("edit index");
       this.editIndex = index;
       this.name = this.data[index];
       console.log(this.name);
     }
   }
 };
 </script>
 <style>
 #testing li {
   border: 1px solid;
   padding: 5px;
 }
 #testing li a {
   font-size: 10px;
   float: right;
   padding: 5px;
 }
</style>