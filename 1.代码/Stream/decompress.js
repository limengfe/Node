var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')           //读取压缩文件input.txt.gz
  .pipe(zlib.createGunzip())                  //解压
  .pipe(fs.createWriteStream('com.txt'));     //写到com.txt里
  
console.log("文件解压完成。");