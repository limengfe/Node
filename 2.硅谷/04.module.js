var a = 10;

// 在node中有一个全局对象global，他的作用和网页中的window相识
//       在全局中创建的变量都会有global的属性保存
//       在全局创建的函数都会作为global的方法保存

// 每一个js文件都保存在一个函数中,因为行1中的 a不是全局变量
// 证明
console.log(global.a); //undefined
// arguments 函数才有的属性 argument.callee-查看执行函数对象
console.log(arguments.callee);//[Function (anonymous)]

console.log(arguments.callee+ "");//打印出来的是一个函数中间是自己写的文本信息

console.log(arguments.length);//5
/*格式   
function (exports, require, module, __filename, __dirname) { 
  自己写的文本
}
*/
// 函数添加了五个参数
// exports 该对象用来暴漏变量和函数到外部
// require 函数, 用来引入外部的模块
// module 代表的是当前模块  exports就是module的属性
         // 因此导出 可以使用exports或者module.exports
//__filename 当前执行文件路径 C:\Users\20183\Desktop\Node.js\2.硅谷\04.module.js
// __dirname  所在文件路径    C:\Users\20183\Desktop\Node.js\2.硅谷

// console.log(exports);
// console.log(require)
console.log(module);
// console.log(__filename)
// console.log(__dirname)
 