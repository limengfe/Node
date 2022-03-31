var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')            //读取input.txt的内容
  .pipe(zlib.createGzip())                  //压缩
  .pipe(fs.createWriteStream('input.txt.gz')); //写入input.txt.gz里
  
console.log("文件压缩完成。");