function Hello(){                                // exports.world = function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
      };
      this.sayHello = function () {
          console.log('Hello' + name)
        };
};
module.exports = Hello;  //module.exports = Hello 代替了exports.world = function Hello(){}