var fs = require('fs');
//异步读取
fs.readFile('readFile.txt',function (err,data) {
    if(err){                                   //先回调错误
        return console.log(err);
    }
    console.log('异步读取:'+data.toString());
  });

  //同步读取
  var data  = fs.readFileSync('readFile.txt');
  console.log("同步读取:"+data.toString());

  console.log('程序执行完成')