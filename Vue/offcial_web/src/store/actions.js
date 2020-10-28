import Axios from 'axios'
Axios.defaults.baseURL = 'http://master.hogdata.cn'
export default {
    async reqPdcsArr({ commit }, data) {
        await Axios.post('/api/article/listByMenu', data).then(res => {
            commit('getPdcArr', res)
        }).catch(err => {
            console.log('加载错误' + err);
        })

    },
    async getArticle({ commit }, data) {
        await Axios.post('/api/article/details', data).then(res => {
            commit('getArticleContent', res)
        })
    },
    async reqNewsArr({ commit }) {
        await Axios.post('/api/article/news').then(res => {
            commit('getNewsArr', res)
        }).catch(err => {
            console.log('加载错误' + err);
        });
    },

}