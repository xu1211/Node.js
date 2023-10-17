/**
 * 
function functionName(parameters) {
  do something
}
 */


//0. 提升（Hoisting）:作用域在声明之前
console.log(multiply1(1, 1))


//1. 函数声明
function multiply1(x, y) {
  return x * y;
} // 没有分号


//2. 函数表达式（匿名函数）：函数存储在变量,通过变量使用
var multiply2 = function (x, y) {
  return x * y;
};
console.log(multiply2(1, 2))

var multiply3 = function func_name(x, y) {
  return x * y;
};
console.log(multiply3(1, 3))


//3. 构造函数：new Function
var multiply4 = new Function("x", "y", "return x * y");
var x = multiply4(1, 4);
console.log(x)

//4. 箭头函数表达式
const multiply5 = (x, y) => { return x * y };
console.log(multiply5(1, 5))
const multiply6 = (x, y) => x * y;
console.log(multiply5(1, 6))

var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

elements.map(function (element) {
  return element.length;
}); // 返回数组：[8, 6, 7, 9]

// 上面的普通函数可以改写成如下的箭头函数
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// 当箭头函数只有一个参数时，可以省略参数的圆括号
elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

// 当箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号
elements.map((element) => element.length); // [8, 6, 7, 9]

// 在这个例子中，因为我们只需要 `length` 属性，所以可以使用参数解构
// 需要注意的是字符串 `"length"` 是我们想要获得的属性的名称，而 `lengthFooBArX` 则只是个变量名，
// 可以替换成任意合法的变量名
elements.map(({ length: lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]


var adder = {
  base: 1,

  add: function (a) {
    var f = (v) => v + this.base;
    return f(a);
  },

  addThruCall: function (a) {
    var f = (v) => v + this.base;
    var b = {
      base: 2,
    };

    return f.call(b, a);
  },
};



var Foo = () => { };
//没有prototype属性
console.log(Foo.prototype); // undefined


//和 new一起用会抛出错误
var err = new Foo(); // TypeError: Foo is not a constructor
