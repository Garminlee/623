import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = { // 状态对象
    nums: "0",
};
const getters = { // 包含多个getter计算属性函数的对象
    EVENORODD: state => {
        return state.nums % 2 == 0 ? "偶数" : "奇数"
    }
};


const actions = { // 包含多个对应事件回调函数的对象
    ADD({
        commit,
        state
    }) {
        commit("doAdd");
    },
    SUB({
        commit,
        state
    }) {
        commit("doSub");
    },
    ifAdd({
        commit,
        state
    }) {
        if (state.nums % 2 == 0) {
            commit("doAdd")
        }
    },
    aysncAdd({
        commit,
        state
    }) {
        setTimeout(() => {
            commit('doAdd')
        }, 1000);
    }
};

const mutations = { // 包含多个更新state函数的对象
    doAdd(state) {
        state.nums++;
    },
    doSub(state) {
        state.nums--;
    },
    isOdd(state) {
        state.evenOrodd = '偶数'
    },
    isEven(state) {
        state.evenOrodd = '奇数'
    }
};


export default new Vuex.Store({
    state, // 状态对象
    mutations, // 包含多个更新state函数的对象
    actions, // 包含多个对应事件回调函数的对象
    getters // 包含多个getter计算属性函数的对象

})