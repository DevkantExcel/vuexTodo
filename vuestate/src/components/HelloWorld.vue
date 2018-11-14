<template>
  <div class="hello">
    <form @submit.prevent>
      <!-- <input type="text" v-model="todo" >  #-->
      <p>Todo List Using Vuex</p>
      <div class="columns customWidth" >
        <div class="column is-11">
          <b-input placeholder="AddItem" v-model="todo" rounded></b-input> 
        </div>
        <div class="column">
          <button class="button is-success is-rounded" @click="addItem" > add </button>
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
            {{ item.item }}
          </td>
          <td>
            <!-- <a @click="editThis(index, item, item.sno)" class="button is-success is-small">Edit</a> -->
            <span class="mdi mdi-square-edit-outline" @click="editThis(index, item, item.sno)" ></span>
          </td>
          <td>
            <!-- <a @click="delThis(index)" class="button is-danger is-small">Delete</a> -->
            <span class="mdi delete" @click="delThis(index)" ></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//buefy css files
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
// import VueLodash from 'vue-lodash'
// Vue.use(VueLodash)
Vue.use(Buefy);
// buefy css files

import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      todo: null,
      editIndex: null,
      active: false,
      arrIndex: 0,
      sno: null
    };
  },
  computed: {
    ...mapGetters({ showTodo: "showTodoStore" }),
    listItems() {
      // return _.orderBy(this.showTodo, 'sno', 'desc');
      return this.showTodo;
    }
  },
  methods: {
    ...mapActions(["add", "delete", "edit"]),
    addItem: function() {
      if (this.todo !== null && this.todo !== "" && this.editIndex == null) {
        this.add({
          key00: this.todo,
          key01: this.active,
          key02: this.arrIndex
        });
        this.arrIndex += 1;
        this.todo = null;
      } else {
        this.edit({
          key1: this.editIndex,
          key2: this.todo,
          key3: this.active,
          key4: this.sno
        }),
          (this.editIndex = null),
          (this.todo = null);
        this.sno = null;
      }
    },
    delThis: function(index) {
      this.delete(index);
    },
    editThis: function(index, item, sno) {
      // console.log(index, item, sno)
      // need to send data as an object, when passing multiple values
      this.editIndex = index;
      this.todo = item.item;
      this.sno = sno;
      // this.edit({'key1': index, 'key2': item})
    },
    checkboxAlert: function(active) {
      // console.log(active,'checkbox alert')
      if (active == false) {
        this.$toast.open({
          message: "Well Done!!!",
          type: "is-success"
        });
      }
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
