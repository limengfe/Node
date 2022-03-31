var express = require('express');
var app = express();

app.use('Express框架',express.static('Express框架'));

app.get('/get-parse.html',function(req,res){
    res.sendFile(__dirname + "/" +"get-parse.html");
})

app.get('/process-get',function(req,res){
    // 输出JSON格式
    var response ={
        "First Name":req.query.first_name,
        "Last Name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server  = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例,访问地址为http:127.0.0.1:8080",host,port)
})