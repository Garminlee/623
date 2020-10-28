import Axios from 'axios'
Axios.defaults.baseURL = 'http://master.hogdata.cn'
export default {
    reqPdcsArr({ commit }, data) {
        Axios.post('/api/article/listByMenu', data).then(res => {
            commit('getPdcArr', res)
        }).catch(err => {
            console.log('加载错误' + err);
        })

    },
    getArticle({ commit }, data) {
        Axios.post('/api/article/details', data).then(res => {
            commit('getArticleContent', res)
        })
    },
    reqNewsArr({ commit }) {
        Axios.post('/api/article/news').then(res => {
            commit('getNewsArr', res)
        }).catch(err => {
            console.log('加载错误' + err);
        });
    },

}