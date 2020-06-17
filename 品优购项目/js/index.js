window.addEventListener('load', function() {
    // 1. 获取元素
    var arrow_l = this.document.querySelector('.arrow_l');
    var arrow_r = this.document.querySelector('.arrow_r');
    var focus = this.document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;

    // 2. 当鼠标放到焦点图上时，左右箭头显示出来
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
            arrow_r.style.display = 'none';
            arrow_l.style.display = 'none';
            timer = setInterval(function() {
                arrow_r.click();
            }, 2000)

        })
        // 3. 动态生成焦点图的小圆圈 利用焦点图的length属性
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // 利用for循环 根据ul.children.length来动态创建圆圈
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个li
        var li = this.document.createElement('li');
        // 添加进ol
        ol.appendChild(li);
        // 给每个li 添加一个自定义属性 充当索引号 以便后续使用
        li.setAttribute('index', i);
        // 给ol中的第一个li添加一个current类
        ol.children[0].className = 'current';
        // 当点击小圆圈的时候 当前小圆圈获得current类，之前的清除 
        li.addEventListener('click', function() {
            // 先清除所有li的current类 
            for (var j = 0; j < ol.children.length; j++) {
                ol.children[j].className = ' ';
            }
            // 全部清除完毕后再给当前被点击的小圆圈添加current类
            this.className = 'current';
            // 当点击当前小圆圈的时候 滚动图片  滚动的步长就是当前小圆圈的索引号乘以图片宽度
            var index = this.getAttribute('index');
            num = index;
            yuan = index;
            animate(ul, -index * focusWidth);
        })


    }
    // 为了实现轮播图的无缝衔接 通常会克隆第一个图片放到最后
    var last = ul.children[0].cloneNode(true);
    ul.appendChild(last);
    // 右侧箭头 利用类似小圆圈滚动图片的原理 ，设定一个变量，让这个变量充当小圆圈的索引号的作用，每点击一次右箭头这个变量就自++；
    var num = 0;
    var yuan = 0; // 这个变量用来控制小圆点跟着点击滚动
    arrow_r.addEventListener('click', function() {
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth);
            //  当每点击一次箭头 yuan++，控制小圆点跟着滚动
            yuan++;

            if (yuan == ol.children.length) {
                yuan = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                // 先清空所有小圆点的current类
                ol.children[i].className = '';
            }
            // 然后给yuan序号的小圆点加上current类
            ol.children[yuan].className = 'current';
        })
        // 左侧箭头按钮 
    arrow_l.addEventListener('click', function() {
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth);
            //  当每点击一次箭头 yuan++，控制小圆点跟着滚动
            yuan--;
            if (yuan < 0) {
                yuan = ol.children.length - 1;
            }
            for (var i = 0; i < ol.children.length; i++) {
                // 先清空所有小圆点的current类
                ol.children[i].className = '';
            }
            // 然后给yuan序号的小圆点加上current类
            ol.children[yuan].className = 'current';
        })
        // 自动播放轮播图 可以利用手动调用点击事件来实现
    var timer = setInterval(function() {
        arrow_r.click();
    }, 2000)


})