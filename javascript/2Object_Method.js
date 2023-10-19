/**
对象: 是拥有 属性 和 方法 的数据

方法: 函数是一个对象的属性时，称之为方法
 */

//0. 对象属性与方法
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
//访问对象属性
console.log(person.firstName)
console.log(person["lastName"])
//调用对象方法
console.log(person.fullName())
//访问对象方法：返回字符串
console.log(person.fullName)

/**
在对象初始器中,把方法名直接赋给函数的简写语法:
var obj = {
  property(parameters…) { },
  *generator(parameters…) { },
  async property(parameters…) { },
  async* generator(parameters…) { },

  // with computed keys:
  [property](parameters…) { },
  *[generator](parameters…) { },
  async [property](parameters…) { },

  // compare getter/setter syntax:
  get property() { },
  set property(value) { }
};
 */

//原语法
var obj = {
  foo: function () {
    /* code */
  },
  bar: function () {
    /* code */
  },
};
//简写语法：
var obj = {
  foo() {
    /* code */
  },
  bar() {
    /* code */
  },
};

//计算的属性名称作为方法名
var bar = {
  foo0: function () {
    return 0;
  },
  foo1() {
    return 1;
  },
  ["foo" + 2]() {
    return 2;
  },
};
console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2


//生成器方法
// 用有属性名的语法定义方法（ES6 之前）：
var obj2 = {
  g: function* () {
    var index = 0;
    while (true) yield index++;
  },
};
//简写语法：
var obj2 = {
  *g() {
    var index = 0;
    while (true) yield index++;
  },
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1

//Async 方法
// 用有属性名的语法定义方法（ES6 之前）：
var obj3 = {
  f: async function () {
    await some_promise;
  },
};

//简写语法：
var obj3 = {
  async f() {
    await some_promise;
  },
};


//原型方法
class Rectangle {
  // constructor
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(10, 10);

console.log(square.area);// 100




//方法定义不是构造函数，如果你尝试实例化它们，将抛出TypeError。
var obj = {
  method() { },
};
new obj.method(); // TypeError: obj.method is not a constructor

var obj = {
  *g() { },
};
new obj.g(); // TypeError: obj.g is not a constructor (changed in ES2016)
