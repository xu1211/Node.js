
[toc]

## install
```bash
# 全局安装
npm install -g typescript
```

```
tsc -v
```

## [tsc 编译器]
`tsc` 获取TypeScript代码并将其编译为JavaScript

[demo](./helloword/)

1. 创建文件 `hello.ts`
2. 编译
```bash
tsc hello.ts  # 编译会生成hello.js
```
3. 运行
```
node hello.js
```



### tsconfig.json配置文件
- 生成一个 tsconfig.json 文件
```
tsc --init
```
tsc命令时，会根据tsconfig.json文件中的配置选项来编译TypeScript代码

项目的根目录中创建一个名为tsconfig.json的文件，并添加以下内容：
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
这个配置文件指定了TypeScript编译器的选项，以及要包含和排除的文件。


## Data Types

### Primitive Types 原始类型
不是对象的数据，==没有方法或属性==
- string
- number
- bigint
- boolean
- undefined :变量值缺失
- null  :对象值缺失
- symbol

>strictNullChecks 为 false 时， null 和 undefined 会被语言有效地忽略。这可能会导致运行时出现意外错误。
### object Types 对象类型
泛指所有的非原始类型，任何==带有属性的值==
与空对象类型 { } 不同, 与全局类型 Object 不同
- Array Types
相同类型,不固定长度
```ts
number[]
string[]
```
- Tuple Types
不同类型,固定长度
```ts
[string, number]
```
-  类型别名
创建后无法更改属性
```ts
type Person = {
  name: string;
  age: number;
};
```
- Interface Types
可扩展新属性
```ts
interface Person {
  name: string;
}
//添加新字段
interface Person {
  age: number;
}
//扩展接口
interface Women extends Person {
  married: boolean;
}
```
- Function Types
输入输出做限制，也就是有参数和返回值。
全局类型 Function 描述了 bind、call、apply 等属性
```ts
function paintShape(parameter: parameterType): returnType {
  // ...
}
```
- Class Types
有方法
```ts
class Person {
  name: string;
  age: number;
  constructor() {
    this.name = "hello";
  }
}
```
- Enum Types
- Any Types


- Union Types 联合类型
```ts
//表示可能是这些类型中的任何一种的值
TYPE1 | TYPE2 | TYPE3
```
- Intersection Types 交叉类型
```ts
TYPE1 & TYPE2 
```
### 类型操作

#### Type assertions 类型断言
与注释一样，类型断言被编译器删除，不会影响代码的运行时行为。
- as 语法
```ts
const myCanvas = value as TYPE;
```
- 尖括号语法
```ts
const myCanvas = <TYPE>value;
```
- 用两个断言: 不允许可能有效的更复杂的强制转换
```ts
const a = expr as any as T;
```
#### Generics 泛型
- 添加一个类型变量Type, 捕获用户提供的类型
```ts
//泛型接口
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
//泛型函数
function identity<Type>(arg: Type): Type {
  return arg;
}
```
- 方式1: <>显式传递类型
```ts
let output = identity<string>("myString");
```
- 方式2: 类型参数推断,自动设置Type的值
```ts
let output = identity("myString");
```

### 属性
- 可选属性
属性名称后添加 ?
- readonly 属性
- 索引签名
- 溢出属性检查



#### 非空断言运算符（后缀 !）

### 类型转换
#### typeof 类型缩小
JavaScript 的 typeof 返回类型太多
在 TypeScript 中，检查 typeof 返回的值是一种类型保护, 返回一组特定的字符串：
>"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"



## 语法
### 变量
- var 和 let 都 允许更改变量中保存的内容
- const 不允许 更改变量中保存的内容


- 类型注释
const、var 或 let 声明变量时，可以选择添加类型注释以显式指定变量的类型
```ts
let varName: Type
//Example:
let myName: string = "Alice";
```


### Classes 类


- 构造函数

- 方法

- get/set


- 继承
implements
extends

- 可见性
public
protected
private

- static

- abstract 抽象

### 模块
任何包含顶层 import 或 export 的文件都被视为一个==模块==。
其他文件都视为==脚本==

- 导入导出
