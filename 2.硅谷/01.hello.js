// console.log("hello world") ;

// module.exports.name ="孙悟空";
// module.exports.age =18;
// module.exports.sayName = function () {
//   console.log("我是猪八戒！")
//   };

  //这样写很麻烦是吧,使用一下方法，一旦使用3-7行代码将无效
  module.exports = {
    height:180,
    weight:150,
    sayName(){
      console.log("你的身高体重！")
    }
  } 

  // exports 和module.exports 是上一样，
  // 但是在使用对象暴漏变量和函数时，只能使用 module.exports ={}，而不可以使用module.exports = {}
  // exports指向module.exports，所以指向同一个对象，但是使用module = {}暴漏js内容时，指向对象就发生了变化
   //此时 exports 和module.exports就不一样了,这也是基本数据类型和引用数据类型的差别.

  //  实在记不住,那就记得使用 module.exports(){}来暴漏文件内容就行了.