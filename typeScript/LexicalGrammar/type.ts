/**
 * Primitive Types
 * 原始数据类型 :没有方法或属性
  string
  number
  bigint
  boolean
  undefined :变量值缺失
  symbol
  null  :对象值缺失
 */
//string
{
  let name: string = "bob";
  name = "smith";

  let age: number = 37;
  let sentence1: string = `Hello, my name is ${name}.

I'll be ${age + 1} years old next month.`;

  let sentence2: string = "Hello, my name is " + name + ".\\n\\n" +
    "I'll be " + (age + 1) + " years old next month.";

}
//number
{
  let binaryLiteral: number = 0b1010; // 二进制
  let octalLiteral: number = 0o744;    // 八进制
  let decLiteral: number = 6;    // 十进制
  let hexLiteral: number = 0xf00d;    // 十六进制
}
//bigint
{
  let bigNumber: bigint = BigInt(123456789);
}
//boolean
{
  let flag: boolean = true;
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
//any
{
  let x: any = 1;    // 数字类型
  x = 'I am who I am';    // 字符串类型
  x = false;    // 布尔类型
}
//void
{
  function hello(): void {
    alert("Hello Runoob");
  }
}

/**
 * Object Types
 * 对象类型
  Array
  Tuple
  object
  Function
  Class
 */

//Array
{
  // 在元素类型后面加上[]
  let arr: number[] = [1, 2];

  // 或者使用数组泛型
  let arr: Array<number> = [1, 2];
}
//Tuple
{
  let x: [string, number];
  x = ['Runoob', 1];    // 运行正常
  x = [1, 'Runoob'];    // 报错
  console.log(x[0]);    // 输出 Runoob
}

