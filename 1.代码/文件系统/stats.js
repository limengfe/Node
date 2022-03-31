var fs = require('fs');

console.log('准备打开文件');
fs.stat('stats.txt',function (err,stats) {
    if(err){
        return console.log(err);
    }
    console.log("读取信息成功");
  
    //检测文件类型
  console.log("是不是文件？"+stats.isFile());
  console.log("是不是目录?" + stats.isDirectory());
  })

  