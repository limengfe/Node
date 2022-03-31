process.on('exit',function(code){  //当进程准备退出时触发。
    // 以下代码永远不会执行
    setTimeout(function(){
        console.log('不会执行');

    },0)
    console.log('退出码为',code);
});
console.log('程序执行完毕');