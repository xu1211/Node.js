/**
 * Object Types 对象类型
  Array
  Tuple
  object
  Function
  Class
 */
//Array: type[]
{
    // 在元素类型后面加上[]
    var arr1 = [1, 2];
    // 数组泛型
    var arr2 = [1, 2];
    //arr2[0] = "string"  // 报错
}
//Tuple: []
{
    var x = void 0;
    x = ['Runoob', 1]; // 运行正常
    //x = [1, 'Runoob'];    // 报错
    console.log(x[0]); // 输出 Runoob
}
//object: {}
{
    var obj = {
        property1: 1,
        property2: 2
    };
}
//interface
{
    function printCoord(pt) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }
    printCoord({ x: 100, y: 100 });
}
/**
 * 其他类型
  enum
  any
  void
  never :never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
 */
//enum
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var c = Color.Blue;
    console.log(c); // 输出 2
}
//any: 不希望某个特定的值导致类型检查错误时，你可以使用它。
{
    //可以是任何类型
    var x = 1; // 数字类型
    x = 'I am who I am'; // 字符串类型
    x = false; // 布尔类型
    //怎么使用都不会报错
    var obj = { x: 0 };
    obj.bar = 100; //访问它的任何属性
    obj = "hello"; //赋其他值
    var n = obj; //付给其他值
    obj.foo(); //调用方法
    obj(); //调用函数
}
//void
{
    function hello() {
        alert("Hello Runoob");
    }
}
