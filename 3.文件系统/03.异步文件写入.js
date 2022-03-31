// 文件写入 
  // 手动操作的步骤 (异步)
  // 1.打开 fs.open(path[, flags[, mode]], callback)
                      //  path 要打开文件的路径
                      //  flags打开文件操作的类型 默认r read读
                          // r只读
                          // w可写
                      //  mode一般不写
                      // callback
                          //err
                          //fd 文件描述
  // 2.写入 fs.write(fd, string[, position[, encoding]], callback)
                      //fd文件描述符 写入文件描述
                      //string要写入的内容
                      //position写入的起始位置
                      // encoding 写入编码UTF——8所以不用写
                      // callback
                         //err
                         //written
                         //string 要写入的内容
  // 3.保存并关闭 fs.close(fd[, callback]) 
                      // callback 
                          //err 

// 引入
var fs = require("fs");
// 打开文件
fs.open("fs2.txt","w",function(err,fd){
  if(!err){
    console.log("文件创建完成！")
  }
    //  写入文件
      fs.write(fd,"唯有自己靠得住",2,function(){
        if(!err){
          console.log("文件写入成功！")
        }
        // 关闭文件
        fs.close(fd,function(){
          if(!err){
            console.log("文件已经关闭！")
          }
        })
      })
  // 
})

// node先执行同步
console.log("我在最上面~~~")

