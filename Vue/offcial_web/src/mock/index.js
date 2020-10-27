import Mock from 'mockjs'
// const Mock = require('mockjs');

Mock.Random.extend({
    enterGas() {
        return this.pick([
            '自然进气',
            '非自然进气'
        ]);
    },
    addPress() {
        return this.pick([
            '涡轮增压',
            '非涡轮增压'
        ]);
    },
    gasCtx() {
        return this.pick([
            '单项置凸轮轴',
            '多项置凸轮轴'
        ]);
    }
});
Mock.mock('/productsdata', {
    'data|8': [{
        'id|+1': 1,
        'title': '@ctitle',
        'imgUrl': Mock.Random.image('373x339', '#894FC4', '#FFF', 'png', 'Product'),
        'pdcParams': ['排量: @integer(1,10)L', '进气方式: @enterGas', '压缩机: @addPress', '气缸数: @integer(8,30)缸', '每缸气门数: @cword("一二三四五六七八九十")气门', '压缩比: @integer(10,30):@integer(1,3)', '配气机构: @gasCtx']
    }],

});

Mock.mock('/Newsdata', {
    'data|5': [{
        'id|+1': 1,
        'title': '@csentence(20,35)',
        'source': '(文章来源于@csentence(2,10))',
        'imgUrl': Mock.Random.image('315x180', '#894FC4', '#FFF', 'png', 'News'),
        'date': '@date',
        'infoText': '@cparagraph(50,100)'
    }]
});