require(['./libs/bscroll', './libs/jquery'], function(BScroll, $) {
    console.log($);
})

define(function(require, module, exports) {
    function fn() {
        console.log(11);
    }
    module.exports = fn;
})