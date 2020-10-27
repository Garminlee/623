/* mutation对象*/

import {
    ADDTODO,
    DELTODO,
    SELECTALL,
    DELDONE,
    RECEIVE_TODOS
} from './mutations_types'
export default {
    [ADDTODO](state, {
        todo
    }) {
        state.todos.unshift(todo);
    },
    [DELTODO](state, {
        index
    }) {
        state.todos.splice(index, 1)
    },
    [SELECTALL](state, {
        check
    }) {
        state.todos.forEach(todo => {
            todo.complete = check;
        });
    },
    [DELDONE](state) {
        state.todos = state.todos.filter(todo =>
            !todo.complete)
    },

    [RECEIVE_TODOS](state, todos) {
        state.todos = todos;
    }
}