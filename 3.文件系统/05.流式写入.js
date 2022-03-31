// 不管是同步文件的写入，还是异步文件、简单文件，性能都比较差，容易导致内存溢出

// 而且每次都只能写入一次信息，为了可以多次写入请往下看
const fs = require("fs");
// 流入式写入
// 创建一个可写流
  // fs.createWriteStream(path[,option]);
          //  path:路径
          // option：配置的参数
var ws = fs.createWriteStream("fs4.txt");  

// 可以通过监听流的open和close来监听流的打开和关闭
ws.once('open',function(){
  console.log("流打开了")
})

ws.once("close",function(){
  console.log("流关闭了")
})  //此时并不会关闭，还需要27行的代码

// 通过ws写入内容
ws.write('写入流');
ws.write('哈哈哈');
ws.write('哈哈哈');
ws.write('嘎嘎嘎');

ws.close();  //之前版本的话，写入的数据不是完整的
// 因此使用ws.end();关闭流。现在因为版本ws.close也可以。