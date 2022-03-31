// Buffer缓冲区
//  结构和数组很像,操作方法也一样, 就当成数组就可以.
// 区别 数组不了哟存储2进制的文件,而Buffer专门保存2进制文件.
// buffer中存储的时二进制,但是显示是以十六进制.

var str = "Hello 飞飞!";
// 将这个字符串转为buffer
var buf = Buffer.from(str);
console.log(buf);//<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
console.log(buf.length);//13字节 占内存的大小
console.log(str.length);//9  字符串的长度

// 创建一个指定大小的buffer
// var buf2 = new Buffer(10);
// console.log(buf2.length); //字节长度为10 ,但是官网并不这么建议使用
// 官网建议
var buf2 = Buffer.alloc(10);
console.log(buf2.length);//字节长度为10

console.log(buf2);//<Buffer 00 00 00 00 00 00 00 00 00 00>
// 添加值
buf2[0] = 88;//<Buffer 58 >
buf2[1]=255;//<Buffer 58 ff >
buf2[2]= 0xaa;//<Buffer 58 ff aa 00 00 00 00 00 00 00>

buf2[3] = 286;//<Buffer 58 ff aa 1e 00 00 00 00 00 00>但是le不是286
// 因为buf只取8位二进制在0-255之间,超过8位以后,取值会自动舍弃前面几位,只取后八位
buf2[10]=15;//<Buffer 58 ff aa 00 00 00 00 00 00 00>值和24一样,因为buffer大小一旦确定,无法修改,buf2的素引只到9
console.log(buf2);//输出的结果都是16进制显示 <Buffer 58 ff aa 1e 00 00 00 00 00 00>

console.log(buf2[1]);//255 控制台和页面输出都是10进制,不然的话,出来的数都不知道到底是多少
// 如果有需要可以自动转换
console.log(buf2[1].toString(16));//十六进制输出 ff

// 也是创建Buffer,但是存在安全隐患,有可能会把之前村的值,读取到...建议不用
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);


// Buffer.from(str)将一个字符串转化为buffer
// Buffer.alloc(size)创建一个指定大小的buffer
// Buffer.allocUnsafe(size)创建一个指定大小的buffer,但可能包含敏感数据
// buf.toString()将缓冲区的数据转化为字符串
const  buf4 = Buffer.from('我是嫩爹!')
console.log(buf4.toString());//我是嫩爹!

