var express = require('express');
var app = express();
var fs = require('fs');

// 添加数据
var user ={
    "user4":{
        "name":"haha",
        "password":"password4",
        "profession":"kid",
        "id":4
      }
}

app.get('/listAdd',function(req,res){
    // 读取存在的数据
    fs.readFile(__dirname + "/" + "users.json","utf8",function(err,data){//这个地方错了几次  看看符号啊
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.send(JSON.stringify(data))
    })
})

var server = app.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
  
  })