function say (word){
    console.log(word);     //这个函数是输出参数
}

function execute (someFunction,value){
    someFunction(value);    //这个函数是参数1(参数2)
}
// 调用
execute(say,"Hello");        