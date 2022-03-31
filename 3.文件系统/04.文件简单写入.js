// fs.writeFile(file, data[, options], callback)异步
                // file 文件路径名
                // data 写入数据
                // options <配置
                    // encoding 编码 默认: 'utf8'
                    // mode <integer> Default: 0o666
                    // flag 文件权限 默认: 'w'. 
                         // r 只读
                         // w 只写
                         // a 追加
                // callback <Function>
                     //只有一个参数err 
// fs.writeSync(fd, string[, position[, encoding]])

// 引入
const fs = require('fs');

fs.writeFile("fs3.txt","加油飞飞",{flag:"a"}, function(err){    //通过flag控制文件操作类型
  if(!err){
    console.log('文件写入成功!')
  }
});

// 向其他路径上写文件
fs.writeFile("../../../Desktop/fs3.txt","加油飞飞",{flag:"w"}, function(err){    //通过flag控制文件操作类型
  if(!err){
    console.log('文件写入成功!')
  }
});