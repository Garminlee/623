export default ({
    getPdcArr(state, res) {
        state.pdcArr = res.data.data;
        console.log(res);
    },
    getNewsArr(state, res) {
        state.newsArr = res.data.data;
        // console.log(res.data.data);
    },

})