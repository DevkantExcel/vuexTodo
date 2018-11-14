<template>
  <div class="hello">
    <form @submit.prevent>
      <!-- <input type="text" v-model="todo" >  #-->
      <p>Todo List Using Vuex</p>
      <div class="columns customWidth" >
        <div class="column is-11">
          <!-- <b-input placeholder="AddItem" v-model="todo" rounded></b-input>  -->
          <b-input placeholder="AddItem" v-model="message" rounded></b-input> 
        </div>
        <div class="column">
          <button class="button is-success is-rounded" @click="addTodo" > add </button>
        </div>
      </div>
       
    </form>
      <!-- <ul>
        <li v-for="(item, index) in showTodo" :key="index">
          {{ item }}
          <button @click="delThis(index)">Delete this</button>
        </li>
      </ul>  -->

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
            <!-- <a @click="editThis(index, item, item.sno)" class="button is-success is-small">Edit</a> -->
            <span class="mdi mdi-square-edit-outline" @click="editThis(index, item.arrtodo, item.sno)" ></span>
          </td>
          <td>
            <!-- <a @click="delThis(index)" class="button is-danger is-small">Delete</a> -->
            <span class="mdi delete" @click="delThis(item.sno)" ></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "HelloWorld",
  //data() moved to store.js & being called in computed property
  computed: {
    //****** mapGetters used to display array elements *******/
    ...mapGetters({ showTodo: "showTodoStore" }),
    //**** v-model = 'message' ****/
    message: {
      set: function(val) {
        this.$store.commit("updateMessage", val);
      },
      get: function() {
        // eslint-disable-next-line
        // console.log(this.$store.state.store.addTodo.message);
        return this.$store.state.store.addTodo.message;
      }
    },
    active: {
      set: function(val) {
        this.$store.commit("updateactive", val);
      },
      get: function() {
        return this.$store.state.store.addTodo.active;
      }
    },
    editIndex: {
      set: function(val) {
        this.$store.commit("updateIndex", val);
      },
      get: function() {
        return this.$store.state.store.addTodo.editIndex;
      }
    },
    arrIndex: {
      set: function(val) {
        this.$store.commit("updatearrIndex", val);
      },
      get: function() {
        return this.$store.state.store.addTodo.arrIndex;
      }
    },
    sno: {
      set: function(val) {
        this.$store.commit("updatesno", val);
      },
      get: function() {
        return this.$store.state.store.addTodo.sno;
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
          arrtodo: this.$store.state.store.addTodo.message,
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
      // eslint-disable-next-line
      // console.log(index, item, sno)
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
