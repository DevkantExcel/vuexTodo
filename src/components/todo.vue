<template>
<section>
   <div id="app">
        <form v-on:submit.prevent >  
                <p style="font-size: 30px;" >Todo List</p>
                <div class="columns customWidth80 ">
                <div class="column is-11"> <input v-model="name" class="input is-rounded"> </div>
                <div class="column"> <button class="button is-rounded is-success" v-on:click="insertData">Add</button> </div>
                </div>
        </form>
        <!-- <ul v-show="todos.length">
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }}                
            </li>
        </ul> -->
        <!--################ table ############# -->
        <div class="table-responsive customWidth80 " v-show="todos.length" >          
            <table class="table">
                <thead>
                <tr>
                    <th class="one" >#</th>
                    <th class="two" >name</th>
                    <th class="three" >Date Time</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(todo, index) in todos" :key="index" :class="{strike : todo.active}" >
                    <td> <b-checkbox 
	                    	type="checkbox is-success is-small" 
	                    	v-model="todo.active" 
	                    	@change.native="checkboxAlert(todo.active)">                    		
                    	</b-checkbox> 
                    </td>
                    <td><span class="customFont" >{{ todo.name }}</span></td>
                    <td>{{ todo.date }}</td>
                    <td><span class="mdi mdi-square-edit-outline" @click="editItem(todo,index)" ></span></td>
                    <td><span class="mdi delete" @click="delItem(index)" ></span></td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--################ table ############# -->
       
   </div>
</section>
</template>


<script lang="ts">
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
export default{
     name: '',
     data:function() {
            return {
                name: null,
                todos:[],
                date:null,
                editThis: null,
                active: false,
            }  
        },
        methods: {         
            insertData: function() {
                if(this.name!==null && this.name !== '' && this.editThis == null) {
                this.date = new Date().toLocaleString();
                // console.log('submit button clicked');
                this.todos.push({name: this.name, date: this.date, active: false});
                this.name = '';
                } else {
                    Vue.set(this.todos, this.editThis, {name: '*'+this.name, date: this.date, active: false})
                    this.name = null
                    this.editThis = null
                }
            },
            delItem: function(index){
                // console.log(index);
                this.$delete(this.todos, index);
            },
            editItem: function(todo, index){
                // console.log(todo.name, index)
                this.editThis = index
                this.name = todo.name
            },
            checkboxAlert: function(active){
            if(active == false){
                this.$toast.open({
                    message: 'Well Done!!!',
                    type: 'is-success'
                })
            }
        }
        }    
}
</script>
<style>
form {
    /* display: inline-block; */
    /* border: 1px solid; */
    /* width: 80%; */
    /* margin: 0 auto; */
}
input.input {
    /* width: 500px; */
    /* float: left; */
    /* display: inline-block; */
}
button {
    /* float: right; */
    /* display: inline-block; */
}
.is-clearfix:after {
    /* clear: both; */
    /* content: " "; */
    /* display: none; */
}
.customWidth80 {
    width: 80%;
    margin: 0 auto;
}
.strike {
    text-decoration: line-through;
}
.customFont {
    font-size: 20px;
}
table {
    table-layout: fixed;
}
table td {
    word-wrap: break-word;
    height: 20px;
}
.one {
    width: 8%;
}
.two {
    width: 60%;
}
.three{
    width: 15%;
}




</style>


