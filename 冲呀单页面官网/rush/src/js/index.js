$(function() {
    //测试
    console.log("======");
    var BrowserMatch = {
        init: function() {
            this.browser = this.getBrowser().browser || "未知浏览器"; //获取浏览器名
            this.version = this.getBrowser().version || "未知浏览器版本号"; //获取浏览器版本
        },
        getBrowser: function() { // 获取浏览器名
            var rMsie = /(msie\s|trident\/7)([\w\.]+)/;
            var rTrident = /(trident)\/([\w.]+)/;
            var rEdge = /(chrome)\/([\w.]+)/; //IE

            var rFirefox = /(firefox)\/([\w.]+)/; //火狐
            var rOpera = /(opera).+version\/([\w.]+)/; //旧Opera
            var rNewOpera = /(opr)\/(.+)/; //新Opera 基于谷歌
            var rChrome = /(chrome)\/([\w.]+)/; //谷歌 
            var rUC = /(chrome)\/([\w.]+)/; //UC
            var rMaxthon = /(chrome)\/([\w.]+)/; //遨游
            var r2345 = /(chrome)\/([\w.]+)/; //2345
            var rQQ = /(chrome)\/([\w.]+)/; //QQ
            //var rMetasr =  /(metasr)\/([\w.]+)/;//搜狗
            var rSafari = /version\/([\w.]+).*(safari)/;

            var ua = navigator.userAgent.toLowerCase();


            var matchBS, matchBS2;

            //IE 低版
            matchBS = rMsie.exec(ua);
            if (matchBS != null) {
                matchBS2 = rTrident.exec(ua);
                if (matchBS2 != null) {
                    switch (matchBS2[2]) {
                        case "4.0":
                            return {
                                browser: "lowIE",
                                version: "IE: 8" //内核版本号
                            };
                            break;
                        case "5.0":
                            return {
                                browser: "lowIE",
                                version: "IE: 9"
                            };
                            break;
                        case "6.0":
                            return {
                                browser: "lowIE",
                                version: "IE: 10"
                            };
                            break;
                        case "7.0":
                            return {
                                browser: "Microsoft IE",
                                version: "IE: 11"
                            };
                            break;
                        default:
                            return {
                                browser: "Microsoft IE",
                                version: "Undefined"
                            };
                    }
                } else {
                    return {
                        browser: "Microsoft IE",
                        version: "IE:" + matchBS[2] || "0"
                    };
                }
            }
            //IE最新版
            matchBS = rEdge.exec(ua);
            if ((matchBS != null) && (!(window.attachEvent))) {
                return {
                    browser: "Microsoft Edge",
                    version: "Chrome/" + matchBS[2] || "0"
                };
            }
            //UC浏览器					  
            matchBS = rUC.exec(ua);
            if ((matchBS != null) && (!(window.attachEvent))) {
                return {
                    browser: "UC",
                    version: "Chrome/" + matchBS[2] || "0"
                };
            }
            //火狐浏览器
            matchBS = rFirefox.exec(ua);
            if ((matchBS != null) && (!(window.attachEvent))) {
                return {
                    browser: "火狐",
                    version: "Firefox/" + matchBS[2] || "0"
                };
            }
            //Oper浏览器					 
            matchBS = rOpera.exec(ua);
            if ((matchBS != null) && (!(window.attachEvent))) {
                return {
                    browser: "Opera",
                    version: "Chrome/" + matchBS[2] || "0"
                };
            }
            //遨游
            matchBS = rMaxthon.exec(ua);
            if ((matchBS != null) && (!(window.attachEvent))) {
                return {
                    browser: "遨游",
                    version: "Chrome/" + matchBS[2] || "0"
                };
            }
            //2345浏览器					  
            matchBS = r2345.exec(ua);
            if ((matchBS != null) && (!(window.attachEvent))) {
                return {
                    browser: "2345",
                    version: "Chrome/ " + matchBS[2] || "0"
                };
            }
            //QQ浏览器					  
            matchBS = rQQ.exec(ua);
            if ((matchBS != null) && (!(window.attachEvent))) {
                return {
                    browser: "QQ",
                    version: "Chrome/" + matchBS[2] || "0"
                };
            }
            //Safari（苹果）浏览器
            matchBS = rSafari.exec(ua);
            if ((matchBS != null) && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {
                return {
                    browser: "Safari",
                    version: "Safari/" + matchBS[1] || "0"
                };
            }
            //谷歌浏览器
            matchBS = rChrome.exec(ua);
            if ((matchBS != null) && (!(window.attachEvent))) {
                matchBS2 = rNewOpera.exec(ua);
                if (matchBS2 == null) {
                    return {
                        browser: "谷歌",
                        version: "Chrome/" + matchBS[2] || "0"
                    };
                } else {
                    return {
                        browser: "Opera",
                        version: "opr/" + matchBS2[2] || "0"
                    };
                }
            }
        }
    };
    BrowserMatch.init();
    console.log("当前浏览器为：" + BrowserMatch.browser + "\n版本为：" + BrowserMatch.version);
    if ("lowIE" == BrowserMatch.browser) {
        location.href = "low.jsp";
    } else {
        var mySwiper = new Swiper('.swiper-container', {
            speed: 3000,
            autoplay: true, //可选选项，自动滑动
            loop: true,
            effect: 'fade',
            noSwiping: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
        var mySwipers = new Swiper('.swiper-containers', {
            speed: 6000,
            autoplay: true, //可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            scrollbar: {
                el: '.swiper-scrollbar'
            },
        });

        mySwipers.el.onmouseenter = function() {
            mySwipers.autoplay.stop();
        };
        mySwipers.el.onmouseleave = function() {
            mySwipers.autoplay.start();
        };

        $(".swiper-itemicon").click(function() {
            var featurestop = $("#features").offset().top;
            $("body,html").animate({ scrollTop: featurestop }, 300);
        });
        $(window).scroll(function() {
            $(".navbar-default").css("background-color", "rgba(0,0,0,0.5)");
            if ($(this).scrollTop() == 0) {
                $(".navbar-default").css("background-color", "transparent");
            }
        });
        $(".weixin").mouseover(function() {
            $(".lastarea-link-icon").css("display", "block");
        });
        $(".weixin").mouseout(function() {
            $(".lastarea-link-icon").css("display", "none");
        });
        $(".weixin").click(function() {
            if ($(".lastarea-link-icon").css("display") == "block") {
                $(".lastarea-link-icon").css("display", "none");
            } else {
                $(".lastarea-link-icon").css("display", "block");
            }
        });

        function emailVali() {
            var emailNum = $(".reg-item-mail").val();
            var regEmail = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
            if (!regEmail.test(emailNum)) {
                $("#emailValid").html("请输入正确的邮箱地址");
                return;
            }
            $.ajax({
                url: "user/validationEmail",
                type: "post",
                dataType: "json",
                data: { emailNum: emailNum },
                success: function(data) {
                    if (data) {
                        location.href = "reg.jsp?emailNum=" + emailNum;
                    } else {

                        location.href = "login.jsp?emailNum=" + emailNum;

                    }
                }
            });
        }
        $(".reg-item-btn").click(function() {
            $("#emailValid").html("");
            emailVali();
        });

        $(".reg-item-mail").focus(function() {
            $("#emailValid").html("");
        });

        $(".reg-item-wrap").on("keydown", "input", function(e) {
            var key = e.which;
            if (key == 13) {
                emailVali();
            } else if (key == 9) {
                window.event.returnValue = false;
            }
        });

        var tcvideo = $("#tcvideo");
        var tcv = document.getElementById("tcvideo");
        $(".videolay").click(function() {
            $(this).toggleClass("active");
            if ($(this).hasClass("active")) {
                tcv.play();
                $(".videocontrols").hide(300);
            } else {
                tcv.pause();
                $(".videocontrols").show(300);
            }


        });
    }

});