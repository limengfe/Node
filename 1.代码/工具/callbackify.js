const { Console } = require('console');
const util = require('util');

async function fn() {
    return 'Hello World'
  }
  const callbackFunction = util.callbackify(fn);

  callbackFunction((err,ret)=>{
      if(err) throw err;             //异常优先回调
      console.log(ret);
  })