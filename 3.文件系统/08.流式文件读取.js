// 这样更方便

var fs = require("fs");
// 创建一个可读流
var rs = fs.createReadStream("haizei1.png");
// 创建一个可写流
var ws = fs.createWriteStream("hello2.png");

// pipe()可以将可读流的内容,直接输出到可写流中
rs.pipe(ws)