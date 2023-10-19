//静态方法, 类方法: 不能在对象上调用，只能在类中调用
class Runoob {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let noob = new Runoob("菜鸟教程");

// 可以在类中调用 'hello()' 方法
document.getElementById("demo").innerHTML = Runoob.hello();

// 不能通过实例化后的对象调用静态方法
document.getElementById("demo").innerHTML = noob.hello();
// 以上代码会报错


静态方法，原型方法，getter 和 setter 