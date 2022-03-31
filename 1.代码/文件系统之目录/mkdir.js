var fs = require("fs");
// tmp 目录必须存在
console.log("创建目录 /tmp/test/");
fs.mkdir("C:/Users/20183/Desktop/Node.js/1.代码/tem/test/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});




// 1.创建