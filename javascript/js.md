[toc]
# 词汇语法
作用：解释 JavaScript 源文本
1. 删除空格和注释
2. 语法分析：标识符、关键字、文字和标点符号（主要是运算符）
3. 自动插入分号

## 注释
- hashbang 注释
指定JavaScript 解释器的路径
只允许一条
`#!` 开头, 之前不允许有任何类型的空格
```JavaScript
#!/usr/bin/env node

console.log("Hello world");
```
- 单行注释
```JavaScript
//
```
- 多行注释
```JavaScript
/* */
```


## 关键词，保留字
- 声明：
const var let
- 控制流程：
if  else
switch  case  default
try catch finally throw
- 循环
for in
do while
break continue
- 函数和类
function
class return
import
export

debugger

null
true  false
this  super
new
delete  void  typeof
instanceof
with
extends

- 严格模式保留
let （也在 const 、 let 和类声明中保留）
static
yield （也在生成器函数体中保留）
implements
interface
package
private
protected
public

- 模块代码或异步函数体保留
await
- 其他
enum

arguments （不是关键字，但在严格模式下不能声明为标识符）

## 自动分号补全
一些 JavaScript 语句必须用分号结束，所以会被自动分号

# 表达式和运算符

- []
数组初始化/字面量语法。
- {}
对象初始化/字面量语法。
- ( )
分组操作符
---

- delete
delete 运算符用来删除对象的属性。

- void
void 运算符表示表达式放弃返回值。

- typeof
typeof 运算符用来判断给定对象的类型。

- in
in 运算符用来判断对象是否拥有给定属性。

- instanceof
instanceof 运算符判断一个对象是否是另一个对象的实例。
---
- class 
关键字定义了类表达式。
- function 
关键字定义了函数表达式。

- this 
关键字指向函数的执行上下文
- super
super 关键字调用父类的构造器。

- async function
定义一个异步函数表达式。
- await
暂停或恢复执行异步函数，并等待 promise 的 resolve/reject 回调。

- async function*
async function* 定义了一个异步生成器函数表达式。
- function* 
关键字定义了一个 generator 函数表达式。
- yield 
暂停和恢复 generator 函数。
- yield* 
委派给另外一个 generator 函数或可迭代的对象。


# 数据类型和数据结构


## 动态和弱类型
- 动态类型
任何变量都可以被赋予（和重新赋予）各种类型的值
```JavaScript
let foo = 42; // foo 现在是一个数值
foo = "bar"; // foo 现在是一个字符串
foo = true; // foo 现在是一个布尔值
```

- 弱类型
操作涉及不匹配的类型时，它允许隐式类型转换
```JavaScript
const foo = 42; // foo 现在是一个数值
const result = foo + "1"; // JavaScript 将 foo 强制转换为字符串，因此可以将其与另一个操作数连接起来
console.log(result); // 421
```
## 类型
- Number（数字）
- String（字符串）
- Boolean（布尔）
- Symbol（符号）（ES2015 新增）
原子（atom）类型，创建一个唯一并且不可变的属性键
- Object（对象）
  - Function（函数）
  - Array（数组）
  - Date（日期）
  - RegExp（正则表达式）
- null（空）
表示**对象**的缺失
- undefined（未定义）
表示**值**的缺失
- Error（错误）类型



### 原始值
除了 Object 以外，类型都定义了表示在语言最低层面的**不可变值**
原始类型都有它们相应的对象包装类型，提供处理值的方法

类型|	typeof 返回值|	对象包装器|
-------- | -----|-----|
Null|	"object"|	/
Undefined|	"undefined"|	/
Boolean|	"boolean"|	Boolean
Number|	"number"|	Number
BigInt|	"bigint"|	BigInt
String|	"string"|	String
Symbol|	"symbol"|	Symbol

## Object
JavaScript 中，对象是唯一**可变的值**
Object = 一组属性的集合
创建 会自动初始化一组有限的属性；这些属性还可以被添加和移除。
对象属性=键值对

有两种对象属性的类型：数据属性和访问器属性
数据属性：key与value关联
访问器属性：key与get() set()关联

# 字面量/常量
- 空字面量
null

- 数值分隔符
可以使用下划线（_，U+005F）作为分隔符以增强数值字面量的可读性：
```JavaScript
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xA0_B0_C0
1_000_000_000_000_000_000_000n
```
- 数组字面量
```
[1954, 1974, 1990, 2014];
```

- 对象字面量
```JavaScript
var o = { a: "foo", b: "bar", c: 42 };

// ES6 中的简略表示方法
var a = "foo",
  b = "bar",
  c = 42;
var o = { a, b, c };
// 不需要这样
var o = { a: a, b: b, c: c };
```
- 模板字面量
```JavaScript
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`

```


# 变量
var 与 let 的区别
- let 和 const (ES6)
const 关键字来定义一个常量，
let 关键字定义的限定范围内作用域的变量

# 函数 function
函数是头等对象 (first-class)，**具有属性和方法**
与其他对象的区别在于函数**可以被调用**，是Function对象

提升（Hoisting）:作用域在声明之前

- 函数声明 (function statements)
```
function name([param[, param[, ... param]]]) { statements }
```
- 函数表达式 (function expression)
函数存储在变量
```
var myFunction = function name([param[, param[, ... param]]]) { statements }
```

- 箭头函数表达式 (=>)
箭头函数有两个方面的作用：更简短的函数并且不绑定this。

```
([param] [, param]) => { statements } 
param => { statements } 
() => { statements }
param => expression
```

- 构造函数 (new Function() )
很多时候需要避免使用 new 关键字
```
new Function (arg1, arg2, ... argN, functionBody)
```
## 生成器函数 generator function
返回一个 Generator 对象
符合可迭代协议和迭代器协议
- 函数生成器声明 (function* 语句)
```
function* name([param[, param[, ...param]]]) { statements }
```
- 函数生成器表达式 (function*表达式)
```
function* [name]([param] [, param] [..., param]) { statements }
```
# 类 class
定义类的一种方法是使用类声明
