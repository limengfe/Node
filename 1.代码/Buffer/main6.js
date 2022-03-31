var  buf1 = Buffer.from('菜鸟教程');
var buf2 = Buffer.from('www.runoob.com');
var buf3 = Buffer.concat([buf1,buf2]);
console.log('buffer3的内容是'+buf3);