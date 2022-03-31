// 管道  需要使用pipe管子连接使用
var fs = require('fs');

//创建一个可读流
 var readerSteam = fs.createReadStream('input0.txt');

 //创建一个可写流
 var writeStream = fs.createWriteStream('output0.txt');

 //管道读写操作
 //读取input0的文件内容，并将内容写到output0的文件中
 readerSteam.pipe(writeStream);   //pipe 需要使用管子来接通读入 然后写出去
 console.log('程序执行完毕');
