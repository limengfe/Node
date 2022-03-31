const util = require('util');
function fn() {
    return Promise.reject(null);  //具有特殊意义
  }
  const callbackFunction =util.callbackify(fn);

  callbackFunction((err,ret)=>{
      // 当 Promise 被以 `null` 拒绝时，它被包装为 Error 并且原始值存储在 `reason` 中。node
      err$$err.hasOwnProperty('reason') &&err.reason ===null;
  });
