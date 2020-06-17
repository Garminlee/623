window.addEventListener('load', function() {
    // header 
    var header = document.querySelector('header');
    var headerLi = header.querySelectorAll('li');

    var headerchange = function() {
        for (var i = 0; i < headerLi.length; i++) {
            if (window.innerWidth < 1399) {
                headerLi[i].style.padding = '0 16px';
            } else {
                headerLi[i].style.padding = '0 24px';
            }
        }
    }
    headerchange();
    window.addEventListener('resize', function() {
        headerchange();
    });



    // 轮播图
    // 动态获取小圆点
    var wrapper = document.querySelector('.focus_wrapper');
    var wrapper_ul = wrapper.querySelector('ul');
    var wrapper_ol = wrapper.querySelector('.circle');
    var imgWidth = wrapper_ul.querySelector('li').offsetWidth;
    for (var i = 0; i < wrapper_ul.children.length; i++) {
        // 创建一个li
        var ol_li = document.createElement('li');
        // 把li添加到ol中
        wrapper_ol.appendChild(ol_li);
        // 给每个li添加一个自定义属性index 后面拿来当索引号计算步长
        ol_li.setAttribute('index', i);
        // 给第一个li添加一个current类
        wrapper_ol.children[0].className = 'current';
        //然后当点击小圆圈的时候获得current类 排他思想
        ol_li.addEventListener("click", function() {
            for (var j = 0; j < wrapper_ol.children.length; j++) {
                // 先清除所有li的current类
                wrapper_ol.children[j].className = '';
            }
            // 然后给当前点击的li添加current
            this.className = 'current';
            // 被点击的小圆圈滚动到相应图片 滚动距离为index * 图片宽度
            var index = this.getAttribute('index');
            num = circle_num = index;
            animate(wrapper_ul, -index * imgWidth);


        })
    }

    window.addEventListener('resize', function() {
        imgWidth = wrapper_ul.querySelector('li').offsetWidth;
        animate(wrapper_ul, -num * imgWidth);

    });

    // 为了实现无缝衔接滚动  复制第一个li
    var firstli = wrapper_ul.children[0].cloneNode(true);
    wrapper_ul.appendChild(firstli);
    var num = 0; // 控制自动播放
    var circle_num = 0; //控制自动播放时小圆圈跟着一起动
    var timer = setInterval(function() {
        if (num == wrapper_ul.children.length - 1) {
            wrapper_ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(wrapper_ul, -num * imgWidth);
        circle_num++;
        if (circle_num == wrapper_ul.children.length - 1) {
            circle_num = 0;
        }
        for (var i = 0; i < wrapper_ol.children.length; i++) {
            wrapper_ol.children[i].className = '';

        }
        wrapper_ol.children[circle_num].className = 'current';


    }, 3500);



    // 右侧边栏
    var slide = document.querySelector('.r_slide');
    var slide_ul = slide.querySelector('ul');
    var slide_li = slide_ul.querySelectorAll('li');
    var code_pic = slide.querySelector('.code_pic');
    var go_top = slide_ul.querySelector('.go_top');
    // 滑动效果
    for (var i = 0; i < slide_li.length - 1; i++) {
        slide_li[i].addEventListener('mouseover', function() {
            animate(this, 0);
        })
        slide_li[i].addEventListener('mouseout', function() {
            animate(this, 126);
        })
    }
    // 二维码显示效果
    slide_li[0].addEventListener('mouseenter', function() {
        code_pic.style.display = 'block';

    })
    slide_li[0].addEventListener('mouseleave', function() {
        code_pic.style.display = 'none';

    })

    // 返回顶部 把动画函数里面水平的值都改成页面垂直相关的值
    function animate_top(obj, target, callback) {
        // 为了防止多次点击导致加了多个定时器 使得动画越来越快 所以每次触发前先清除定时器
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 设置动画步长 匀速就是固定步长  缓慢动画就是步长逐渐变小 算法是 （目标数-当前位置） / 10
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            // 设置定时器停止
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                // 回调函数要写在定时器结束里面
                if (callback) {
                    callback();
                }
            }

            window.scroll(0, window.pageYOffset + step);
        }, 15)
    }
    go_top.addEventListener('click', function() {
        animate_top(window, 0);
    })



    // 模块上浮
    var service = document.querySelector('.service');
    var caseone = document.querySelector('.Caseone');
    var cases = document.querySelector('.cases');
    var clients = document.querySelector('.clients');
    var opinions = document.querySelector('.opinions');
    var footer = document.querySelector('footer');
    document.addEventListener('scroll', function() {
        // console.log(window.pageYOffset);
        // console.log(wrapper.clientHeight);
        var H_h1 = wrapper.clientHeight / 3;
        var H_h2 = wrapper.clientHeight + service.clientHeight * 2 / 3;
        // console.log(H_h2);
        var H_h3 = wrapper.clientHeight + service.clientHeight + caseone.clientHeight + cases.clientHeight * 0.7;
        var H_h4 = H_h3 + clients.clientHeight;
        var H_h5 = H_h4 + opinions.clientHeight * 0.8;

        if (window.pageYOffset > H_h1) {
            service.className = 'service w clearfix margin0';
        }
        if (window.pageYOffset > wrapper.clientHeight) {
            caseone.className = 'Caseone w clearfix margin15';
        }
        if (window.pageYOffset > H_h2) {
            cases.className = 'cases w margin0';
        }
        if (window.pageYOffset > H_h3) {
            clients.className = 'clients w margin0';
        }
        if (window.pageYOffset > H_h4) {
            opinions.className = 'opinions w margin0';
        }
        if (window.pageYOffset > H_h5) {
            footer.className = 'w clearfix margin0';
        }
        // 头部透明度
        if (window.pageYOffset > wrapper.clientHeight * 0.9) {
            header.className = 'bg7';
        } else {
            header.className = 'bg0';

        }

    })

})