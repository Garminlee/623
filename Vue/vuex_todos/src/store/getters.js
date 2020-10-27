/* 包含所有基于state的getter计算属性的方法对象*/

export default {
    allCount(state) {
        return state.todos.length
    },
    completeCount(state) {
        return state.todos.reduce((prev, todo) => prev + (todo.complete ? 1 : 0), 0);
    },
    AllCheck(state, getters) {
        return getters.allCount === getters.completeCount && state.todos.length > 0
    }
}