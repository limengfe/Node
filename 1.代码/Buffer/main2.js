// 创建一个长度为10，且用0填充得Buffer
const buf1 = Buffer.alloc(10);

//创建一个长度为10，且用0x1填充的Buffer
const buf2 = Buffer.alloc(10,1);

// 创建一个长度为10，且为初始化得Buffer
// 这个方法比调用Buffer.alloc（）更快
// 但返回得Buffer实例可能包含旧数据
// 因此需要更快的fill（）或write（）重写
const buf3 = Buffer.allocUnsafe(10);

//创建一个包含[0x1,0x2,0x3]的Buffer
const buf4 = Buffer.from([1,2,3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('test');

// 创建一个包含Latin-1字节[0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('test','latin1');
console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);
console.log(buf5);
console.log(buf6);
