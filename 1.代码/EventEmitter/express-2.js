// 可以调用多个 依次执行
var events = require('events');
var emitter = new events.EventEmitter();      //emitter 发射体
emitter.on('some-event',function(arg1,arg2){  //添加一个监听事件
    console.log('listener1',arg1,arg2);
});
emitter.on('some-event',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});
emitter.emit('some-event','参数1','参数2');   //emit 发射  触发事件