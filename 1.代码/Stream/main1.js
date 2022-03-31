var fs = require('fs');
var data ="牛牛:250";  //此处写数据，然后会写到output文件中

//创建一个可以写入的流 ，写到output文件中
var writeStream = fs.createWriteStream('output1.txt');

//使用utf8编码
writeStream.write(data,'utf-8');

//标记文件末尾
writeStream.end();

//处理流事件 finish, error
writeStream.on('finish',function(){    //finish 所有数据已被写入到底层系统时触发。
    console.log('写入完成');
});
writeStream.on('error',function(){
    console.log(err.stack)
});

console.log('程序执行完毕');