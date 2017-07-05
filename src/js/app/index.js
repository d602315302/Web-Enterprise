/** 
 * 首页功能
 */

//define(id,['jquery],function($){ $('') })

define(['jquery', 'com/slide', 'com/loadNews', 'com/gotop', 'com/exposure'], function($, Slids, LoadNews, GoTop, Exposure) {

    //轮播图
    Slids.init($('.carousel'));

    //加载新闻
    new LoadNews($('#news'));

    //回到顶部
    GoTop;

    //曝光
    Exposure.init($('#services'), function($node) {
        $('.nav').children().removeClass('active')
        $('.nav').children().eq(0).addClass('active')
    })
    Exposure.init($('#portfolio'), function($node) {
        $('.nav').children().removeClass('active')
        $('.nav').children().eq(1).addClass('active')
    })
    Exposure.init($('#about'), function($node) {
        $('.nav').children().removeClass('active')
        $('.nav').children().eq(2).addClass('active')
    })
    Exposure.init($('#news'), function($node) {
        $('.nav').children().removeClass('active')
        $('.nav').children().eq(3).addClass('active')
    })
    Exposure.init($('#team'), function($node) {
        $('.nav').children().removeClass('active')
        $('.nav').children().eq(4).addClass('active')
    })
    Exposure.init($('#contact'), function($node) {
        $('.nav').children().removeClass('active')
        $('.nav').children().eq(5).addClass('active')
    })

    Exposure.init($('#header'), function($node) {
        $('.nav').children().removeClass('active')

    })

    //改变导航条背景色
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 500) {
            $('.header-nav').addClass('header-active')

        } else if ($(window).scrollTop() < 500) {
            $('.header-nav').removeClass('header-active')
        }
    })

})