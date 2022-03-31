var fs = require('fs');   //从input文件上读取
var data = '';
//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为utf-8
readerStream.setEncoding('utf-8');

//处理流事件  data, end, and error
readerStream.on('data',function(chunk){     //有数据时触发
    data+=chunk;
});

readerStream.on('end',function(){      //没有数据时触发
    console.log(data);
});
readerStream.on('error',function(){    //错误时触发
    console.log(err.stack);
});
console.log('程序执行完毕');
