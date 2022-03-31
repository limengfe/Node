var buf1 = Buffer.from('ABC');
var buf2 = Buffer.from('ABCD');
 var result = buf1.compare(buf2);

 if(result<0){
     console.log(buf1+"在"+buf2+"之前");
 }else if(result ==0){
    console.log(buf1+"和"+buf2+"相同"); 
 }else{
    console.log(buf1+"在"+buf2+"之后");
 }

