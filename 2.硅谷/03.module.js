 //引入其他模块
 //node中通过require（）函数来引入外部的模块
 //require（）可以传递一个文件的路径，这里的路径必须以.或者..开头

 //使用require（）引入模块以后，该函数会返回一个对象，则会个对象就代表引入的模块。

 // require ("./02.module.js");
const md = require("./02.module");

console.log(md);

const math = require('./math');

console.log(math.add(123,456));
console.log(math.mul(123,456));

// 模块标识符-文件路径
//   分为2种 1.自己建的文件使用.或..
//           2.直接使用文件名  mode_modules中的文件

const  qs = require("qs");
console.log(qs);