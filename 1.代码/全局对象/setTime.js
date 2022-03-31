function printHello() {
    console.log('Hello!');
  }
  // 添加定时器
   var s= setTimeout(printHello,2000);

  //清除定时器
  clearTimeout(s);