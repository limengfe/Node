var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('some-event',function(){    //on绑定监听事件
    console.log('some-event事件触发');
})
setTimeout(function(){
    event.emit('some-event')         //emit触发事件
},1000)