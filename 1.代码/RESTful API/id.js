// :id  用于读取指定用户的详细信息
var express = require('express');
var app = express();
var fs = require('fs');


app.get('/:id',function(req,res){
   //首先读取已经存在的用户
   fs.readFile(__dirname + "/" + "users.json","utf8",function(err,data){  //这个地方错了几次  看看符号啊
       data = JSON.parse(data);
       var user = data["user"+req.params.id]
       console.log(user);
       res.send(JSON.stringify(user));
   })
})

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("监听开窗口已经打开!",host,port)
})