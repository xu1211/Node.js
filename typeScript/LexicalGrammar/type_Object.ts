
/**
 * Object Types 对象类型
  Array
  Tuple
  object
  Function
  Class
 */

//Array
{
  // 在元素类型后面加上[]
  let arr1: number[] = [1, 2];

  // 数组泛型
  let arr2: Array<number> = [1, 2];
  //arr2[0] = "string"  // 报错
}
//Tuple
{
  let x: [string, number];
  x = ['Runoob', 1];    // 运行正常
  //x = [1, 'Runoob'];    // 报错
  console.log(x[0]);    // 输出 Runoob
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
  enum Color { Red, Green, Blue };
  let c: Color = Color.Blue;
  console.log(c);    // 输出 2
}
//any: 不希望某个特定的值导致类型检查错误时，你可以使用它。
{
  //可以是任何类型
  let x: any = 1;    // 数字类型
  x = 'I am who I am';    // 字符串类型
  x = false;    // 布尔类型

  //怎么使用都不会报错
  let obj: any = { x: 0 };
  obj.bar = 100;  //访问它的任何属性
  obj = "hello";  //赋其他值
  const n: number = obj;  //付给其他值
  obj.foo();      //调用方法
  obj();          //调用函数
}
//void
{
  function hello(): void {
    alert("Hello Runoob");
  }
}
