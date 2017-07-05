define(['jquery'], function($) {
    function GoTop($target) {
        this.$target = $target;
        this.bind()
    }

    GoTop.prototype.bind = function() {
        var _this = this;
        $(window).on('scroll', function() {
            _this.goTopShow()
        })
        this.$target.on('click', function() {
            _this.goTop()
        })
    }
    GoTop.prototype.goTopShow = function() {

        if ($(window).scrollTop() > 600) {
            this.$target.css('display', 'block')

        } else if ($(window).scrollTop() < 600) {
            this.$target.css('display', 'none')
        }
    }
    GoTop.prototype.goTop = function() {
        $(window).scrollTop(0);
    }
    var GoTop1 = new GoTop($('.go-top'))
    return GoTop1;
})