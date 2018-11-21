<template>
<div>
   <v-container class="customWidthSeventy" >
          <h1 class="center" >Your Todos</h1><hr>
        <v-layout>
     <table v-show="showTodo.length" class="center" fixed>
       <thead>
         <tr>
           <th></th>
           <th>Item</th>
           <th>Date</th>
           <th>Time</th>
           <th>Edit</th>
           <th>Delete</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="(item, index) in listItems" :key="index" >
           <td>
             <v-checkbox 
               color="success"
               type="checkbox is-success is-small" 
               v-model="item.active" 
               @click.native="checkboxAlert(item)">
            </v-checkbox>
          </td>
          <td v-bind:class="{strike : item.active}" style="word-wrap: break-word;">
            {{ item.arrtodo }}
          </td>
          <td v-bind:class="{strike : item.active}">
            {{ item.date }}
          </td>
          <td v-bind:class="{strike : item.active}">
            {{ item.time }}
          </td>
          <td>
            <v-btn @click="editThis(index, item)" round color="primary" dark>Edit</v-btn>
          </td>
          <td>
            <v-btn @click="delThis(item.sno)" round color="error" dark>Delete</v-btn>
          </td>
        </tr>
      </tbody>
     </table>
     </v-layout>
     </v-container>   
</div>
    
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TodoData",
  computed: {
    //****** mapGetters used to display array elements *******/
    ...mapGetters({ showTodo: "showTodoStore", showaddTodo: "showaddTodo" }),
    //**** v-model = 'message' ****/
    active: {
      set: function(val) {
        this.$store.commit("updateactive", val);
      },
      get: function() {
        return this.showaddTodo.active;
      }
    },
    editIndex: {
      set: function(val) {
        this.$store.commit("updateIndex", val);
      },
      get: function() {
        return this.showaddTodo.editIndex;
      }
    },
    sno: {
      set: function(val) {
        this.$store.commit("updatesno", val);
      },
      get: function() {
        return this.showaddTodo.sno;
      }
    },
    listItems() {
      return this.showTodo;
    }
  },
  methods: {
    ...mapActions(["delete", "edit", "checkbox"]),
    delThis: function(index) {
      this.delete(index);
    },
    editThis: function(index, item) {
      // need to send data as an object, when passing multiple values
      // this.editIndex = index;
      this.editIndex = item.sno;
      this.message = item.arrtodo;
      this.sno = item.sno;
      this.time = item.time;
      this.date = item.date;
    },
    checkboxAlert: function(item) {
      this.checkbox({
        active: item.active,
        arrtodo: item.arrtodo,
        sno: item.sno,
        editIndex: item.sno
      });
    }
  }
};
</script>

<style scoped>
.strike {
  text-decoration: line-through;
}
.center {
  margin: 0 auto;
}
.customWidthSeventy {
  width: 75%;
  margin: 0 auto;
}
table tr td {
  word-wrap: break-word;
  width: 100px;
  text-align: center;
}
</style>
