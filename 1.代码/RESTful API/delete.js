var express = require('express')
var app = express();
var fs = require('fs');

var id = 2;

app.get('/delete',function(req,res){
    // First read existing users.
    fs.readFile(__dirname+'/'+'users.json','utf-8',function(err,data){
        data = JSON.parse(data);
        delete data["user"+id];

        console.log(data);
        res.end(JSON.stringify(data));
    });

})

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("监听窗口8000已开启",host,port);
})