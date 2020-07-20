$(function() {
    const slideTop = $(".slide").offset().top;
    const contentTop = $(".content").offset().top;
    const planTop = $(".plan").offset().top;
    const productsTop = $(".products").offset().top;
    const newsTop = $(".news").offset().top;
    $(window).scroll(function() {
        if ($(document).scrollTop() >= slideTop * 3) {
            $(".details").addClass("scale1");
        }
        if ($(document).scrollTop() >= contentTop) {
            $(".go1").addClass("l-m");
            $(".go2").addClass("r-m");
        }
        if ($(document).scrollTop() >= contentTop * 1.5) {
            $(".go3").addClass("l-m");
            $(".go4").addClass("r-m");
        }
        if ($(document).scrollTop() >= planTop) {
            $(".pro_info").addClass("goUp");
        }
        if ($(document).scrollTop() >= productsTop) {
            $(".go5").addClass("goUp");
        }
        if ($(document).scrollTop() >= (slideTop * 1.5 + productsTop)) {
            $(".go6").addClass("goUp");
        }
        if ($(document).scrollTop() >= (newsTop - slideTop * 2)) {
            $(".go7").addClass("goUp");
        }
    });


});