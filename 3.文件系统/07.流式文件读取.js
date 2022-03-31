// 同样适用与大文件   但是这样写麻烦.

var fs = require("fs");
// 创建一个可读流
var rs = fs.createReadStream("haizei1.png");
// 创建一个可写流
var ws = fs.createWriteStream("hello1.png");
  // 监听开启和关闭
 rs.once("open",function(){
   console.log("可读流打开了！")
 }) ;

 rs.once("close",function(){
  console.log("可读流关闭了！")  //但是文件却没有关闭

  // 数据读取完毕,关闭可写流
  ws.end();
}) ;

ws.once("open",function(){
  console.log("可写流打开了！")
}) ;

ws.once("close",function(){
 console.log("可写流关闭了！")  //但是文件却没有关闭
}) ;

// 如果要读一个可读流中的数据,必须位data绑定事件,他才会开始读取数据.
// 而且不是全部读取,会每次读
rs.on("data",function (data) {
  console.log(data)
  // 讲读取的数据写入到可写流 
  ws.write(data);
})