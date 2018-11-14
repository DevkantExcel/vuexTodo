import Vue from "vue";
export default {
    state: {
        todos: [],
        //sorting key & order
        sort_by: 'sno',
        sort_desc: true,
    },
    mutations: {
        addtodo: (state, item) => {
            // console.log(item.key01)
            state.todos.push({
                'item': item.key00,
                'active': item.key01,
                'sno': item.key02
            })
            // console.log(state.todos)
        },
        delItem: (state, index) => {
            state.todos.splice(index, 1)
        },
        editItem: (state, val) => {
            // console.log(state.todos, val.key1, val.key2)
            Vue.set(state.todos, val.key1, {
                'item': val.key2,
                'active': val.key3,
                'sno': val.key4
            })
        }
    },
    getters: {
        // showTodoStore: state => state.todos
        // new function for sorting in desc order
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
                items.reverse()
            }
            return todos
        }
    },
    actions: {
        add({
            commit
        }, payload) {
            // console.log(payload)
            commit('addtodo', payload)
        },
        delete({
            commit
        }, payload) {
            commit('delItem', payload)
        },
        edit({
            commit
        }, payload) {
            // console.log(payload)
            commit('editItem', payload)
        }
    }
}