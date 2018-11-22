import Vue from "vue";
export default {
    state: {
        todos: [],
        //sorting key & order
        sort_by: 'sno',
        sort_desc: true,
        //helloworld component data values
        addTodo: {
            // v-model for input type
            message: "",
            //editIndex used to edit details 
            editIndex: null,
            //active property using which css strikes the values
            active: false,
            //arrIndex is a counter which increases sno in array
            arrIndex: 0,
            sno: null,
            //time picker v-model used by Vuetify Time picker
            time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"}),
            menu2: false,
            //date picker v-model used by Vuetify Date picker
            date: new Date().toISOString().substr(0, 10),
            menu: false,
        }
    },
    mutations: {
        addTodo: (state, item) => {
            state.todos.push(item)
        },
        delItem: (state, index) => {
            state.todos.splice(state.todos.length - 1 - index, 1);
        },
        editItem: (state, val) => {
            Vue.set(state.todos, (state.todos.length - 1 - val.editIndex), {
                'active': val.active,
                'arrtodo': val.arrtodo,
                'date': val.date,
                'sno': val.sno,
                'time': val.time,
            })
        },
        checkBox: (state, val) => {
            // state.todos.forEach((value, index) => {
            //     if (value.sno === val.sno) {
            //         state.todos[index].active = val.active
            //     }
            // });
            Vue.set(state.todos, (state.todos.length - 1 - val.editIndex), {
                'active': val.active,
                'arrtodo': val.arrtodo,
                'date': val.date,
                'sno': val.sno,
                'time': val.time,
            })
        },
        updateMessage(state, msg) {
            state.addTodo.message = msg;
        },
        updateIndex(state, val) {
            state.addTodo.editIndex = val;
        },
        updateactive(state, val) {
            state.addTodo.active = val;
        },
        updatearrIndex(state, val) {
            state.addTodo.arrIndex = val;
        },
        updatesno(state, val) {
            state.addTodo.sno = val;
        },
        updateTime(state, val) {
            state.addTodo.time = val;
        },
        updateMenu2(state, val) {
            state.addTodo.menu2 = val;
        },
        updatedate(state, val) {
            state.addTodo.date = val;
        },
        updatemenu(state, val) {
            state.addTodo.menu = val;
        },

    },
    getters: {
        // es6 sort function for sorting in desc order
        showTodoStore(state) {
            return state.todos.slice().reverse();
        },
        //***** getters to shorten the string
        showaddTodo: state => state.addTodo
    },
    actions: {
        add({commit}, payload) {
            commit('addTodo', payload)
        },
        delete({commit}, payload) {
            commit('delItem', payload)
        },
        edit({commit}, payload) {
            commit('editItem', payload)
        },
        checkbox({commit}, payload) {
            commit('checkBox', payload)
        },
    }
}