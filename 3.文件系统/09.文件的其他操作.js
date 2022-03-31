const { listen } = require("express/lib/application");
var fs = require("fs");

// 检查文件是否存在
var  inExists = fs.existsSync("fs.txt");
console.log("inExists");  //inExists

// 获取文件的状态  会返回一个对象,这个对象中保存了当前对象状态的想关信息
// fs.stat(path, callback);
// fs.statSync(path);

fs.stat("hello.png",function(err,stat){
  //size 大小
  // isFile()是否是一个文件
  // idDirectory()是否是一个文件夹(目录)
  console.log(stat.isDirectory); //[Function (anonymous)]
})

// 删除文件
// fs.unlink(path,callback)
// fs.unlinkSync(path);

// 读取一个目录的目录结构
// fs.readdir(path,option,callback);
// fs.readFileSync(path,option);
fs.readdir('.',function(err,files){
  console.log(files);  //01-09 还有图片 以及一个json文件
})

// 重命名
// fs.rename(oldPath,nuwPath,callback)

// 监听文件
// fs.watchFile(filename,option,listen)
//    filename 要监听的文件名
//    option 配置选项
//    listen 回调函数   二个参数
                       //curr 当前文件状态
                       //prev 修改前文件的状态 都是stats对象