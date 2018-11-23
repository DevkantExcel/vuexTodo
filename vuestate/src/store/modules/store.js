import Vue from "vue";
export default {
    state: {
        todos: [],
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