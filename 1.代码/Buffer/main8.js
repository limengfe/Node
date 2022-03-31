var buf1 = Buffer.from('abcdefghijk');
var buf2 = Buffer.from('niu');
buf2.copy(buf1,3);   //索引为3时开始拷贝
console.log(buf1.toString());