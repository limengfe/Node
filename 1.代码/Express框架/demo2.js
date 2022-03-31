// 相当于在学AJAX时 添加的路由一样   需要访问那个直接在127.0.0.1:8000/路径名  即可
var express = require('express');
var app = express();

//主页输出'Hello World'
app.get('/',function(req,res){
    console.log('主页GET请求');
    res.send('Hello GET');
})

//POST请求
app.post('/',function(req,res){
    console.log('主页POST请求');
    res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user',function(req,res){
    console.log('/list_user响应DELETE 请求');
    res.send('删除页面');
})

// /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
 })

//  对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd',function(req,res){
    console.log('/ab*cd GET请求');
    res.send('正则匹配');
})

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例,访问地址为 http://%s:%s",host,port);
})