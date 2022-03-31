const buf  = Buffer.from('runoob','ascii');

//输出7272756e6f6f62
console.log(buf.toString('hex'));

//输出 cnVub29i
console.log(buf.toString('base64'));