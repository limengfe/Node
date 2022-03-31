// 模块化
//  在node中，一个js文件就是一个模块
//   在node中，每一个js文件中的js代码都是独立运行在一个函数中
//     而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问

console.log("我是一个模块，我是02module.js");

//我们可以通过exports向外部暴漏变量和方法
exports.x= "我是02.module.js中的x";
exports.y= "我是y";
exports.fn = function () {

}
