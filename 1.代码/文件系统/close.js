var fs = require('fs');
var buf = new Buffer.alloc(1024);

console.log('准备打开文件');
fs.open('close.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("文件打开成功");
    console.log("准备读取文件");
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            return console.error(err);
        }
        //仅输出字节
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString())
        }
        //关闭文件
        fs.close(fd,function(err){
            if(err){
                console.log(err)
            }
            console.log("文件关闭成功");
        });
    });
});