
/**
 * 
class ClassName {
  constructor() { ... }
}
 */

//0. 类不能提升
// let rectangle = new Rectangle(); //error

//1. 类声明
class Rectangle {
  //类构造函数
  constructor(height, width) {
    //隐式声明类属性: 在构造函数中直接赋值给this对象
    this.height = height;
    this.width = width;
  }
  //类方法
  method_1() { 
    console.log("111")
   }
}
console.log(Rectangle.name);

//1.0 实例化类
let rectangle = new Rectangle();
//1.1 使用 类属性
rectangle.height = 222
console.log(rectangle);
//1.2 使用 类方法
rectangle.method_1()


//2. 类表达式
//2.1 未命名/匿名类
let Rectangle1 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle1.name);// output: "Rectangle"

//2.2 命名类
let Rectangle2 = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle2.name);// output："Rectangle2"




