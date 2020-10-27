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
    TitleBgi({ commit, data }) {
        if (data === 0) {
            commit('caseBgi')
        } else if (data === 1) {
            commit('usBgi')
        } else if (data === 2) {
            commit('pdcBgi')
        } else if (data === 3) {
            commit('newsBgi')
        } else {
            commit('articleBgi')
        }
    }
}