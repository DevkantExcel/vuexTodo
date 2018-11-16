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
            time: null,
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
            state.todos.splice(state.todos.indexOf(index), 1)
        },
        editItem: (state, val) => {
            Vue.set(state.todos, val.sno, {
                'active': val.active,
                'arrtodo': val.arrtodo,
                'sno': val.sno,
                'time': val.time,
                'date': val.date,
            })
        },
        checkBox: (state, val) => {
            state.todos.forEach((value, index) => {
                if (value.sno === val.sno) {
                    state.todos[index].active = val.active
                }
            });
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
            const todos = [...state.todos].sort((a, b) => {
                if (a[state.sort_by] < b[state.sort_by]) {
                    return 1
                }
                if (a[state.sort_by] > b[state.sort_by]) {
                    return -1
                }
                return 0
            })
            if (!state.sort_desc) {
                todos.reverse()
            }
            return todos
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