var fs = require('fs');

fs.readFile('input.txt',function(err,data){      //回调函数最为最后1个参数 ，接受错误对象作为第一个参数
    //错误时
    if(err){ 
         console.log('err.stack');
         return;
     }
     console.log(data.toString());
});
    console.log('程序执行完毕');