// 通用currying函数，接受一个参数，即将要被currying的函数
var curry = function (fn) {
    var args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            args = args.concat([].slice.call(arguments));
        }
    }
};

// 将被currying的函数
var multi = (function () {
    var money = 0;
    return function () {
        for (var i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i];
        }
        return money;
    }
})();

var pay = curry(multi);
pay(1);
pay(2);
pay(3);
pay(4);

console.log(pay());