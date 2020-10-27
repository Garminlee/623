export default ({
    getPdcArr(state, res) {
        state.pdcArr = res.data.data;
        console.log(res);
    },
    getNewsArr(state, res) {
        state.newsArr = res.data.data;
        // console.log(res.data.data);
    },
    caseBgi(state) {
        state.ObjBgi = {
            ctitle: "解决方案",
            title: "SOLUTION",
            bgiFlag: 0,
        }
    },
    usBgi(state) {
        state.ObjBgi = {
            ctitle: "关于我们",
            title: "ABOUT",
            bgiFlag: 1,
        }
        console.log(state.ObjBgi)
    },
    pdcBgi(state) {
        state.ObjBgi = {
            ctitle: "产品中心",
            title: "PRODUCTS",
            bgiFlag: 2,
        }
    },
    newsBgi(state) {
        state.ObjBgi = {
            ctitle: "新闻动态",
            title: "NEWS",
            bgiFlag: 3,
        }
    },
    articleBgi(state) {
        state.ObjBgi = {
            ctitle: "",
            title: "",
            bgiFlag: 4,
        }
    }
})