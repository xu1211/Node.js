/**
this 的值（运行时绑定）,它会随着执行环境的改变而改变。

单独使用，this 。
在方法中，this 表示该方法所属的对象。
在函数中，this 表示全局对象。
显式函数绑定，类似 call() 和 apply() 方法可以将 this 引用到任何对象。
HTML 事件句柄中，this 表示接收事件的元素。

在严格模式下
在函数中，this 是未定义的(undefined)。

 */

//1. 单独使用 this
var x = this;
console.log(x)

//2. 方法中的 this = 方法的对象
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return console.log(this.firstName + " " + this.lastName);
  }
};
person.fullName()

//3. 显式函数绑定: apply 和 call 可以 切换函数执行的上下文环境（context），即 this 绑定的对象
var person2 = {
  firstName: "cosmo",
  lastName: "Doe",
}
person.fullName.call(person2);  // 返回 person2

//4. 函数中使用 this = 函数的所属者
function myFunction() {
  return this; //全局(Global)对象
}
return console.log(myFunction());
