<template>
<v-app id="inspire">
      <v-container grid-list-md text-xs-center class="customWidthFifty">
      <p>Todo List Using Vuex</p>
        <v-layout row wrap>
     <!-- <form @submit.prevent> -->
      <!-- vuetify -->
      <v-flex xs12 >
          <v-text-field
            v-model="message"
            label="Solo"
            placeholder="add todo"
            solo
            @keyup.enter="addTodo">
          </v-text-field>
      </v-flex>
      <!--######## date picker ###########-->
      <v-flex xs12 sm6 md4>
        <v-menu
          :close-on-content-click="false"
          v-model="menu"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="date"
            label="Pick Date"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-spacer></v-spacer>

      <!--########33 date picker ############3-->
      <!--########3 time picker   ###3 -->
      <v-flex xs11 sm5>
        <v-menu
          ref="menu"
          :close-on-content-click="false"
          v-model="menu2"
          :nudge-right="40"
          :return-value.sync="time"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="time"
            label="Pick Time"
            prepend-icon="access_time"
            readonly
          ></v-text-field>
          <v-time-picker
            v-if="menu2"
            v-model="time"
            full-width
            @change="$refs.menu.save(time)"
          ></v-time-picker>
        </v-menu>
      </v-flex>
      <v-spacer></v-spacer>
      <!--###### date time picker #####-->
      
      <v-flex xs12 >
        <v-btn block v-show="this.editIndex == null" @click="addTodo" round color="success" dark>Add</v-btn>
        <v-btn block v-show="this.editIndex !== null" @click="addTodo" round color="primary" dark>Edit</v-btn>
      </v-flex>             
     <!-- </form> -->
     </v-layout>
      </v-container>
      
      <!-- table shifted to component TodoData -->
   </v-app>
</template>
 <script>
import Vue from "vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Todo",
  //data() moved to store.js & being called in computed property
  computed: {
    //****** mapGetters used to display array elements *******/
    ...mapGetters({ showTodo: "showTodoStore", showaddTodo: "showaddTodo" }),
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
    },
    time: {
      set: function(val) {
        this.$store.commit("updateTime", val);
      },
      get: function() {
        return this.showaddTodo.time;
      }
    },
    menu2: {
      set: function(val) {
        this.$store.commit("updateMenu2", val);
      },
      get: function() {
        return this.showaddTodo.menu2;
      }
    },
    date: {
      set: function(val) {
        this.$store.commit("updatedate", val);
      },
      get: function() {
        return this.showaddTodo.date;
      }
    },
    menu: {
      set: function(val) {
        this.$store.commit("updatemenu", val);
      },
      get: function() {
        return this.showaddTodo.menu;
      }
    }
  },
  methods: {
    ...mapActions(["add", "delete", "edit", "checkbox"]),
    ...mapState(["addTodo"]),
    addTodo: function() {
      // new logic

      if (this.editIndex == null) {
        if (
          this.message !== null &&
          this.message !== "" &&
          this.time !== null &&
          this.time !== "" &&
          this.date !== null &&
          this.date !== ""
        ) {
          this.add({
            arrtodo: this.showaddTodo.message,
            active: this.active,
            sno: this.arrIndex,
            time: this.time,
            date: this.date
          });
          this.arrIndex += 1;
          this.message = null;
          this.time = null;
          this.date = null;
        } else {
          alert("please fill all the details i.e, item,date & time");
        }
      }
      if (this.editIndex !== null) {
        if (
          this.editIndex !== null &&
          this.message !== null &&
          this.message !== "" &&
          this.time !== null &&
          this.time !== "" &&
          this.date !== null &&
          this.date !== ""
        ) {
          this.edit({
            editIndex: this.editIndex,
            arrtodo: this.showaddTodo.message,
            active: this.active,
            sno: this.arrIndex,
            time: this.time,
            date: this.date
          }),
            (this.editIndex = null);
          this.active = false;
          this.message = null;
          this.time = null;
          this.date = null;
          this.$router.push("/TodoData");
        } else {
          alert("please fill all the details i.e, item,date & time");
        }
      }
      // new logic ends
    },
    delThis: function(index) {
      this.delete(index);
    },
    editThis: function(index, item) {
      // need to send data as an object, when passing multiple values
      this.editIndex = index;
      this.active = item.active;
      this.message = item.arrtodo;
      this.sno = item.sno;
      this.time = item.time;
      this.date = item.date;
    },
    checkboxAlert: function(item, index) {
      this.checkbox({
        active: item.active,
        arrtodo: item.arrtodo,
        sno: item.sno,
        date: item.date,
        time: item.time,
        // editIndex: item.sno
        editIndex: index
      });
      // eslint-disable-next-line
      Console.log(item, index, 'from checkbox')
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
.center {
  margin: 0 auto;
}
.customWidthFifty {
  width: 50%;
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