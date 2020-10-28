export default ({
    getPdcArr(state, res) {
        state.pdcArr = res.data.data;
        console.log(res);
    },
    getNewsArr(state, res) {
        state.newsArr = res.data;
        console.log(res.data);
    },
    getArticleContent(state, res) {
        state.articleArr = res.data;
        console.log(res.data);
    },

})