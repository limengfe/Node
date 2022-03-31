// 通过npm下载的包都放在node_module文件夹里
//  我们通过npm下载的包,直接通过包名使用即可.

// node在使用模块名字引入模块时,它首先会在当前目录node_module中寻找,
  //  如果找到直接使用,如果找不到去上级寻找
  //  再上级
  //最终没找到,报错

const sql = require("mysql");

const math = require("math");