<template>
   <div class="hello">
     <form @submit.prevent>
      <p>Todo List Using Vuex</p>
      <!-- vuetify -->
      <v-flex xs12 sm6 md3>
          <v-text-field
            v-model="message"
            label="Solo"
            placeholder="AddItem"
            solo
          ></v-text-field>
      </v-flex>
      <div class="text-xs-center">
        <v-btn @click="addTodo" round color="primary" dark>Add</v-btn>
      </div>
       
     </form>
     <table v-show="showTodo.length" class="table customWidthTable is-hoverable">
       <thead>
         <tr>
           <th>#</th>
           <th>Item</th>
           <th>Edit</th>
           <th>Delete</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="(item, index) in listItems" :key="index" :class="{strike : item.active}" >
           <td>
             <b-checkbox 
               type="checkbox is-success is-small" 
               v-model="item.active" 
               @change.native="checkboxAlert(item.active)">
            </b-checkbox>
          </td>
          <td>
            {{ item.arrtodo }}
          </td>
          <td>
            <span class="mdi mdi-square-edit-outline" @click="editThis(index, item.arrtodo, item.sno)" ></span>
          </td>
          <td>
            <span class="mdi delete" @click="delThis(item.sno)" ></span>
          </td>
        </tr>
      </tbody>
     </table>
   </div>
</template>
 <script>
import Vue from "vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Todo",
  //data() moved to store.js & being called in computed property
  computed: {
    //****** mapGetters used to display array elements *******/
    ...mapGetters({ showTodo: "showTodoStore", showaddTodo: "showaddTodo"}),
    //**** v-model = 'message' ****/
    message: {
      set: function(val) {
        this.$store.commit("updateMessage", val);
      },
      get: function() {
        return this.showaddTodo.message;
      }
    },
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
    arrIndex: {
      set: function(val) {
        this.$store.commit("updatearrIndex", val);
      },
      get: function() {
        return this.showaddTodo.arrIndex;
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
    ...mapActions(["add", "delete", "edit"]),
    ...mapState(["addTodo"]),
    addTodo: function() {
      if (
        this.message !== null &&
        this.message !== "" &&
        this.editIndex == null
      ) {
        this.add({
          arrtodo: this.showaddTodo.message,
          active: this.active,
          sno: this.arrIndex
        });
        this.arrIndex += 1;
        this.message = null;
      } else {
        this.edit({
          editIndex: this.editIndex,
          arrtodo: this.message,
          active: this.active,
          sno: this.sno
        }),
          (this.editIndex = null);
        this.message = null;
        this.sno = null;
      }
    },
    delThis: function(index) {
      this.delete(index);
    },
    editThis: function(index, item, sno) {
      // need to send data as an object, when passing multiple values
      this.editIndex = index;
      this.message = item;
      this.sno = sno;
    },
    checkboxAlert: function(active) {
      if (active == false) {
        this.$toast.open({
          message: "Well Done!!!",
          type: "is-success"
        });
      }
    },
    updateMessage(e) {
      this.$store.commit("updateMessage", e.target.value);
    }
  }
};
 </script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.customWidth {
  width: 85%;
  margin: 0 auto;
}
.customWidthTable {
  width: 50%;
  margin: 0 auto;
}
.strike {
  text-decoration: line-through;
}
</style>