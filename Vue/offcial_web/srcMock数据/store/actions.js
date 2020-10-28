import Axios from 'axios'


export default {
    reqPdcsArr({ commit }) {
        Axios.get('/productsdata').then(res => {
            commit('getPdcArr', res)
        }).catch(err => {
            console.log('加载错误' + err);
        })

    },
    reqNewsArr({ commit }) {
        Axios.get('/Newsdata').then(res => {
            commit('getNewsArr', res)
        }).catch(err => {
            console.log('加载错误' + err);
        })

    },

}