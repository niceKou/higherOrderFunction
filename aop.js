Function.prototype.before = function (beforefn) {
    var __self = this; // 保存原函数的引用  func
    return function () { // 返回包含了原函数和新函数的"代理"函数
        beforefn.apply(this, arguments); // 执行函数 beforeFunc()，修正this
        return __self.apply(this, arguments); // 执行原函数
    }
};

Function.prototype.after = function (afterfn) {
    var __self = this;
    return function () {
        var ret = __self.apply(this, arguments);
        afterfn.apply(this, arguments); // // 执行函数 afterFunc()，修正this
        return ret;
    }
};

var beforeFunc = function () {
    console.log(1);
}
var afterFunc = function () {
    console.log(3);
}


var func = function (n) {
    console.log(n);
};
func = func.before(beforeFunc).after(afterFunc);
func(2);