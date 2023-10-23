/**
 * 类的其他方法:
 * 
 * 静态方法，原型方法，getter 和 setter 方法
 */


//1. 静态方法: 不能在对象上调用，只能在类中调用
class Runoob_static {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}
//通过 类名.方法名 调用
console.log(Runoob_static.hello());

//不能通过实例化对象使用, 报错
let noobs = new Runoob_static("菜鸟教程");
// noobs.hello(); //报错


//2. getter 和 setter 方法来获取和设置值
class Runoob {
  constructor(name) {
    this.sitename = name;
  }
  // getter方法
  get s_name() {
    return this.sitename;
  }
  // setter方法
  set s_name(x) {
    this.sitename = x;
  }
}

let noob = new Runoob("菜鸟教程");
// getter,setter 方法不用括号
console.log(noob.s_name) // getter方法
noob.s_name = 123 // setter方法

console.log(noob.sitename) //属性



