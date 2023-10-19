"use strict";



//严格模式: 函数中使用 this = undefined
function myFunction() {
  return this;
}
return console.log(myFunction());