/*包含多个组件通知触发mutation调用间接更新状态的方法对象*/
import storageUtil from '../util/storageUtil';

import {
    ADDTODO,
    DELTODO,
    SELECTALL,
    DELDONE,
    RECEIVE_TODOS
} from './mutations_types';
export default {
    addTodo({
        commit,
        state
    }, todo) {
        commit(ADDTODO, {
            todo
        })
    },
    delTodo({
        commit,
        state
    }, index) {
        commit(DELTODO, {
            index
        })
    },
    selectAll({
        commit,
        state
    }, check) {
        commit(SELECTALL, {
            check
        })
    },
    delDone({
        commit
    }) {
        commit(DELDONE)
    },
    //异步获取todos
    reqTodos({
        commit
    }) {
        setTimeout(() => {
            // 读取todos
            const todos = storageUtil.readTodos();
            // 提交mutation
            commit(RECEIVE_TODOS, todos)
        }, 1000)
    }

}