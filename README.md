[toc]

# 前提
Node.js的核心是基于V8引擎的JavaScript运行时, 本身只能直接运行JavaScript代码
学习node.js前, 先要了解一些JavaScript基础内容

## [JavaScript 必学]

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
- 运行时
  - wokers 多线程
  - Event Loop  事件循环
- Strict Mode  严格模式

## TypeScript
是JavaScript的超集, TypeScript代码可以转换成JavaScript代码在Node.js或浏览器中运行
变成了强类型语言: 增加了静态类型定义,声明我们期望的参数类型以及在函数中返回的确切内容

先了解 JavaScript 的运行时行为, 再补充学习
大纲:
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
- tsconfig.json 项目配置
# Node.js
Learning Node.js

Node.js 是 JavaScript的运行容器
一个node.js只用一个cpu，单线程

## install
下载 https://dev.nodejs.cn/download/package-manager/

会安装 node.js 与 npm

```
node -v
```
### nvm 切换版本
轻松切换 Node.js 版本，并安装新版本以尝试在出现问题时轻松回滚
https://github.com/nvm-sh/nvm

## NPM 包管理
随同NodeJS一起安装的包管理工具
```
npm -v
```

升级npm
```
npm install npm -g
```

### npm安装模块

```shell
//清空NPM本地缓存
npm cache clear
//搜索
npm search <Module Name>

//安装单个包
npm install <Module Name>
npm install <Module Name>@<version>
npm i

npm clean-install #忽略devDependencies,不自动更新
npm ci

//查看
npm ls
//卸载
npm uninstall <Module Name>
//发布
npm publish
```
- 全局安装、本地安装
```
npm install express      # 本地安装 安装包放在 ./node_modules 下
npm install express -g   # 全局安装 安装包放在 /usr/local 下或者node的安装目录
```
- npx 临时安装
### package.json 
位于模块的目录下，用于定义包的属性
```json
{
  "name": "包名",
  "description": "包的描述",
  "version": "4.13.3",
  "author": {包的作者姓名},
  "contributors": [{},{}],
  "repository": {
    "type": "包代码地址类型：git svn",
    "url": "git+https://github.com/strongloop/express.git"
  },
  "keywords": [关键字],
  "dependencies": {运行依赖包列表},
  "devDependencies": {开发依赖包列表}
}
```
#### npm install
`package.json`目录下运行npm安装会通过`package.json`的配置安装依赖

```
npm i
npm ci
npm install
```

#### npm run
运行`package.json` scripts 命令行任务
```
npm run <task-name>
```
- package.json
```
{
  "scripts": {
    <task-name> : <command>
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
  }
}
```

## NPX


## node cli 命令行
- 启动应用
```
node app.js
```

```
node --eval "script"
node -e "console.log(123)"
```
## Asynchronous 异步

- Timers  定时器
setTimeout 和 setInterval 安排未来的函数
### Blocking vs Non-Blocking
Node.js标准库中的所有I/O方法都提供异步版本，这些方法是非阻塞的，并接受回调函数。
一些方法也有阻塞的对应方法，它们的名称以 Sync 结尾。
- Blocking 方法
```js
const fs = require('fs');

const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log
```
- Non-Blocking 方法
```js
const fs = require('fs');

fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log
```
#### 顺序执行多个Non-Blocking
```js
const fs = require('fs');
//readFile先执行
fs.readFile('/file.md', (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  //unlink后执行
  fs.unlink('/file.md', unlinkErr => {
    if (unlinkErr) throw unlinkErr;
  });
});
```
### Callbacks 回调

你如何处理回调的错误？一个非常常见的策略是使用Node.js所采用的：任何回调函数中的第一个参数都是error对象：错误优先回调
```js
const fs = require('fs');

fs.readFile('/file.json', (err, data) => {
  if (err) {
    // handle error
    console.log(err);
    return;
  }

  // no errors, process data
  console.log(data);
});
```
### 立刻执行异步 setImmediate()
```js
setImmediate(() => {
  // run something
});
```



## module
一个 Node.js 文件就是一个模块

### require() 加载module
- require 引入模块


## 常用module
### nodemon 自动重新启动应用
- 安装nodemon
```
npm i -g nodemon
```
- 项目中依赖nodemon
```
nodemon app.js
```
- nodemon 启动应用
```
nodemon app.js
```
### process 
process 核心模块: 不需要“require”，自动可用。


#### env 属性
process提供了 env 属性，它托管了进程启动时设置的所有环境变量。

1. node命令 带环境变量启动
```bash
[key=value ...] node app.js
```
```js
process.env.key; // "value"
```

2. .env 文件
```bash
# .env file
USER_ID="239482"
USER_KEY="foobar"
NODE_ENV="development"
```
dotenv包在运行时加载.env 文件
```js
require('dotenv').config();

process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
process.env.NODE_ENV; // "development"
```

##### NODE_ENV 环境变量
```
NODE_ENV=production
```
- production
日志记录保持在最低的基本级别
会发生更多缓存级别以优化性能


- 配置方式
```bash
#shell配置文件
export NODE_ENV=production

#应用程序初始化命令
NODE_ENV=production node app.js
```
- 代码中使用方式
```
if (process.env.NODE_ENV === 'development') {
  // ...
}

if (process.env.NODE_ENV === 'production') {
  // ...
}

if (['production', 'staging'].includes(process.env.NODE_ENV)) {
  // ...
}
```
#### nextTick() 方法
-  tick
每次事件循环进行一次完整的行程，我们称之为tick。

### events
事件处理, 观察者模式实现

#### EventEmitter 类
- 初始化
```js
// 引入 events 模块
const EventEmitter = require('events');
// 创建 eventEmitter 对象
const eventEmitter = new EventEmitter();
```
- on(event, listener)
添加事件触发时执行的回调函数
```js
eventEmitter.on(event, (event_args) => {
  console.log('started');
});
```

- emit(event, [arg1], [arg2], [...])
触发事件
```js
eventEmitter.emit(event, event_args);
```
- once(event, listener)
添加一次性监听器, 触发后立刻解除该监听器
- removeListener(event, listener) / off()
从事件中删除事件监听器
- removeAllListeners([event])
删除事件的所有监听器

### readline 读取输入
### console 输出


### url 和 querystring 模块

## REPL 交互式解释器
可以用来快速探索Node.js特性
```
node
```


# typeScritp-Node 项目
