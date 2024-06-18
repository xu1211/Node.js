[toc]

# 前提
Node.js的核心是基于V8引擎的JavaScript运行时, 本身只能直接运行JavaScript代码
学习node.js前, 先要了解一些JavaScript基础内容

## [JavaScript 必学](./javascript/js.md)

官方文档:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

[大纲](./javascript/js.md):
- LexicalGrammar 词汇语法
  - Variables 变量
  - Expression 表达式
  - Scope 作用域
  - Loops and iteration 循环和迭代
- dataTypes and dataStructures 数据类型和数据结构
  - Dynamic typing 动态类型
  - weak typing 弱类型
  - Template literals 模版
  - Array 数组
  - Object 对象
    - 属性
    - Method 方法
    - this 操作
- Function 函数
  >没有强制所有功能和数据保存在class类中
  函数可以存在于任何地方，数据可以自由传递
  - Arrow Functions  箭头函数
  - Closures 闭包
  - setTimeout()
- Class 类
  - 构造函数
  - 字段
  - 静态方法、getter、setter方法
  - Public or private
  - 基于原型链的继承
- Asynchronous 异步
  - callback 回调
  - Promises  承诺 (ES6) 
  - Async and Await 同步,等待 (ES2017)
- Strict Mode  严格模式

## [TypeScript](./typescript/ts.md)
是JavaScript的超集, TypeScript代码可以转换成JavaScript代码在Node.js或浏览器中运行
变成了强类型语言: 增加了静态类型定义,声明我们期望的参数类型以及在函数中返回的确切内容

先了解 JavaScript 的运行时行为, 再补充学习
大纲:
- tsc 编译器: 编译ts文件
- tsconfig.json: 项目编译配置
- ts-node模块: 直接运行ts文件
---
- 类型
ts比js增加了一些类型
  - Primitive Types 原始类型
  - object Types 对象类型
    - Tuple Types
    - map
    - enum 枚举
    - Any Types
    - Interface Types
    - Union Types 联合类型
    - Intersection Types 交叉类型
  - 特别类型
    - void
    - never
  - 类型别名
- 类型操作
  - 静态类型定义
  强定义 变量类型, function返回类型
  - 类型批注和编译时类型检查
  在编译期间可以检测和修复错误
  - 类型推断 
  `值 as 类型` 编译时被删除,不会产生异常或null
  - 类型擦除
  - 类型缩小, 类型转换
- function
  - 重载
  - 可选参数
- interface 接口
属性, 抽象方法
  - extends 继承,多继承
- class 类
属性和方法
  - extends 基于类的继承
  - 重写
- 泛型
  - 泛型函数
  - 泛型接口

- 模块
  - import
  - export
- namespace

## model
commonJs、AMD、UMD、ES6
### CommonJS 模块规范
Node.js 服务器专用的，浏览器不能直接使用

CommonJs分为两部分：moudle对象和requeire命令
```
// 导出
// module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量
  // 导出单个值
module.exports = 42;
  // 导出函数
module.exports = () => {
  console.log('This is my function');
};
  // 导出对象
module.exports = {
  property: 'value',
  method: () => {
    console.log('This is a method');
  }
};

// 还可以使用exports导出
  // 导出单个值
exports.myValue = 42;
  // 导出函数
exports.myFunction = () => {
  console.log('This is my function');
};
  // 导出对象
exports.myObject = {
  property: 'value',
  method: () => {
    console.log('This is a method');
  }
};

// 导入
const myModule = require('./myModule');
myModule.myFunction();
```
### ES6 模块规范
在语言标准的层面上，实现了模块功能

在浏览器和node.js中都可以用

使用import和export
```
// 命名导出
export const myFunction = () => {
  console.log('This is my function');
};
// 默认导出
export default 42;
// 重命名导入
export { myFunction as customFunction };


// 命名导入
import { myFunction } from './myModule';
// 默认导入
import myDefaultExport from 'my-module';
// 重命名导入
import { myFunction as customFunction } from 'my-module';
```

# Node.js
Learning Node.js

>Node.js 是 JavaScript的运行容器
一个node.js只用一个cpu，单线程
通过使用事件驱动和非阻塞 I/O 模型来实现异步操作

>Node 是在 2009 年设计的，当时 JavaScript 是一种截然不同的语言。出于必要，Node 必须发明一些概念，这些概念后来被标准组织采用并以不同的方式添加到js语言中。

- install
- NPM 包管理器
- NPX 包执行器
- node cli 命令行
- Asynchronous 异步
  - Timers  定时器
  - Blocking vs Non-Blocking
  - Callbacks 回调
  - Promises  承诺 (ES6)
  - Async and Await 同步,等待 (ES2017)
- modules 模块
  - CommonJS
  - ES6
- 常用module
- 运行时
  - 任务 
  - Event Loop 事件循环
  - workers 多线程
- typeScritp-Node 项目
  - Express 框架
 



# typeScritp-Node 项目
