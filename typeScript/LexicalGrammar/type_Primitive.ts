/**
 * Primitive Types 原始数据类型 :没有方法或属性
  string
  number
  bigint
  boolean
  undefined :变量值缺失
  null  :对象值缺失
  symbol
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

