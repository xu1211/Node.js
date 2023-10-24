
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
不是对象的数据，没有方法或属性
- string
- number
- bigint
- boolean
- undefined :变量值缺失
- null  :对象值缺失
- symbol
### Object Types 对象类型
泛指所有的非原始类型，任何带有属性的值也

- Array Types
相同类型,不固定长度
```ts
[1, 2, 3]
number[]
```
- Tuple Types
不同类型,固定长度
```ts
[string, number]
```
- Interface Types
```ts
interface Person {
  name: string;
  age: number;
}
```
- Class Types
```ts
class Person {
  name: string;
  age: number;
}
```
- Enum Types
- Any Types
- Union Types 联合类型
- Intersection Types 交叉类型
- Function Types
输入输出做限制，也就是参数和返回值。
```ts
function paintShape(parameter: parameterType): returnType {
  // ...
}
```

### 类型别名
```ts
type Person = {
  name: string;
  age: number;
};
```
### Type assertions 类型断言

## 语法
### 变量
const、var 或 let 声明变量时，你可以选择添加类型注释以显式指定变量的类型
```
let varName: Type
let myName: string = "Alice";
```

### 


## 面向对象编程

### Interfaces

### Classes


### Generics 泛型