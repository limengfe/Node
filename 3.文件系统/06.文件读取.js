/* 
  1.同步文件读取
  2.异步文件读取
  3.简单文件读取
    fs.readFile(path[,option],callback)
    fs.readFileSync(path[,option])
         -path 要读取的文件路径
         -option 读取的选项
         -callback回调函数，(err,data)   返回值位Buffer值，因为读取的文件也有可能式图片，音频。
  4.流入文件读取

*/
var fs = require('fs');

  fs.readFile("fs3.txt",function(err,data){
    if(!err){
      console.log(data);
    }
  })

  // 读取图片
  fs.readFile('haizei1.png',function(err,data){
   if(!err){
     fs.writeFile('hello.png',data,function(){
       if(!err){
         console.log("写入图片成功！")
       }
     })
   }
  })