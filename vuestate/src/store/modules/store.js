import Vue from "vue";
export default {
    state: {
        todos: [],
        //sorting key & order
        sort_by: 'sno',
        sort_desc: true,
        //helloworld component data values
        addTodo: {
            message: "",
            editIndex: null,
            active: false,
            arrIndex: 0,
            sno: null,
        }
    },
    mutations: {
        addTodo: (state, item) => {
            state.todos.push(item)
        },
        delItem: (state, index) => {
            //eslint-disable-next-line
            // console.log(index, 'from store mutations delItem')
            state.todos.splice(state.todos.indexOf(index), 1)
        },
        editItem: (state, val) => {
            Vue.set(state.todos, val.sno, {
                'active': val.active,
                'arrtodo': val.arrtodo,
                'sno': val.sno
            })
        },
        updateMessage(state, msg) {
            // eslint-disable-next-line
            // console.log(msg,'from store mutations updateMessage')
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
    },
    getters: {
        // showTodoStore: state => state.todos
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
        }
    },
    actions: {
        add({commit}, payload) {
            // eslint-disable-next-line
            // console.log(payload,'store actions')
            commit('addTodo', payload)
        },
        delete({commit}, payload) {
            commit('delItem', payload)
        },
        edit({commit}, payload) {
            commit('editItem', payload)
        }
    }
}