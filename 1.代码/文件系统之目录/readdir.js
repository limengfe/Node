var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir("C:/Users/20183/Desktop/Node.js/1.代码/tem/",function(err, files){        
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});



// 2.读取