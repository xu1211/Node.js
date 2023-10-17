
/**
 * 
class ClassName {
  constructor() { ... }
}
 */
//1. 类声明
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
console.log(Rectangle.name);

//类不能提升：先声明，后访问
let p = new Rectangle();
p.height = 222
console.log(p);

//2. 类表达式
// 未命名/匿名类
let Rectangle1 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle1.name);
// output: "Rectangle"

// 命名类
let Rectangle2 = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle2.name);
// 输出："Rectangle2"

//构造函数



