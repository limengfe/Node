// 文件系统 File System
// 简单来说就是通过node来操作系统中的文件
// 需要引入fs文件

// 文件写入 
  // 手动操作的步骤 (同步)
  // 1.打开 fs.openSync(path[, flags[, mode]])
                      //  path 要打开文件的路径
                      //  flags打开文件操作的类型
                          // r只读
                          // w可写
                      //  mode一般不写
  // 2.写入 fs.writeSync(fd, string[,position[,encoding]]]
                      //fd文件描述符 写入文件描述
                      //string要写入的内容
                      //position写入的起始位置
                      // encoding 写入编码UTF——8所以不用写
  // 3.保存并关闭 fs.closeSync(fd) 

const fs = require("fs");

console.log(fs);
// 打开文件
const fd =  fs.openSync("../3.文件系统/fs.txt",'w'); //创建fs.text文件
// 写入内容
fs.writeSync(fd,'唯有自己才值得',2); //从2以后位置写
// 关闭文件
fs.closeSync(fd);

