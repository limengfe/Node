//post请求内容都在请求体中， 但是http不会给请求体，因为消耗资源。 所以需要的时候自己手动做
var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req,res){
    // 定义了一个post变量，用于暂存请求体的信息
    var post = "";
    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中。
    req.on('data',function(chunk){
        post +=chunk;
    });
    //在end触发之后，通过querystring.parse将post解析为真正的post请求格式，然后向客服端返回
    req.on('end',function(){
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });

}).listen(8888,()=>{
    console.log("监听窗口已开启！")
});