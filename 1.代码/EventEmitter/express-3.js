//引入模块
var events = require('events');
//创建EventEmitter对象
var eventEmitter = new events.EventEmitter();

//监听器1
var listener1 = function listener1(){
    console.log('监听器listener1执行');
}

//监听器2
var listener2 = function listener2(){
    console.log('监听器listener2执行。');
}

//绑定connection事件，处理函数为listener1
eventEmitter.addListener('connection',listener1)          //为指定事件添加一个监听器到监听器数组的尾部。

//绑定connection事件，处理函数为listener2
eventEmitter.on('connection',listener2)                  //on绑定事件

var eventListeners = eventEmitter.listenerCount('connection');   //用来统计监听事件个数
    console.log(eventListeners + "个监听器监听连接事件");

//处理，触发connection事件
eventEmitter.emit('connection');

//移除监听listener1函数
eventEmitter.removeListener('connection',listener1);
console.log('listener1不再受监听。')

//处理,触发connection事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners+"个监听器监听连接事件。")

console.log('事件执行完毕');

