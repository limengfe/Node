var fs = require('fs');
// 执行前创造一个空的/tem/test
console.log("准备删除目录/tem/test");
fs.rmdir("C:/Users/20183/Desktop/Node.js/1.代码/tem/test/",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取/tem目录");
    fs.readdir("C:/Users/20183/Desktop/Node.js/1.代码/tem/",function(err,files){
        if(err){
            return console.log(err)
        }
        files.forEach(function(file){
            console.log(file);
        })
    })
 });

//  3.删除