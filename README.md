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
  - Arrow Functions  箭头函数
- Class 类
- Strict Mode  严格模式
- Asynchronous 异步
  - callback 回调
  - Promises  承诺 (ES6) 
  ```
  ```
  - Async and Await 同步,等待 (ES2017)
  简化使用基于promise的API所需的语法
    ```js
    //每次调用函数时，它都会返回一个新的 Promise
    async function name(param) {
      statements
      //可以使用 await 机制
      await expression
      //Await表达式通过挂起执行直到返回的promise被实现或拒绝
    }
    ```
  - Timers  定时器
  setTimeout 和 setInterval 安排未来的函数
  - Closures  关闭
  - Event Loop  事件循环

## TypeScript
是JavaScript的超集, TypeScript代码可以转换成JavaScript代码在Node.js或浏览器中运行
增加了静态类型定义,声明我们期望的参数类型以及在函数中返回的确切内容

先了解 JavaScript 的运行时行为, 再根据大纲补充学习
大纲:
- 类型
  >值或对象的声明 与 类型 没有一对一
  类型只是集合, 一个特定的值可以同时属于多个集合。
  - 类型批注和编译时类型检查
  - 类型推断 `值 as 类型`
  - 类型擦除
  - enum 枚举
  - map
  - Mixin
- OOP 面向对象
  >没有强制所有功能和数据保存在class类中
  函数可以存在于任何地方，数据可以自由传递
  - 接口
  - 类
  - 模块
- 泛型编程
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
全局安装、本地安装
```
npm install express      # 本地安装 安装包放在 ./node_modules 下
npm install express -g   # 全局安装 安装包放在 /usr/local 下或者node的安装目录
```
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




## node 命令
- 启动应用
```
node app.js
```

```
node --eval "script"
node -e "console.log(123)"
```
## Asynchronous 异步

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
回调是一个简单的函数，它作为一个值传递给另一个函数，并且只在事件发生时执行
- 语法
```js

//callback作为参数传递给doSomething
function doSomething(callback) {
  // 执行某些操作
  callback(); // 调用回调函数
}

// 1.将回调函数作为参数传递给doSomething函数
function callback() {
}
doSomething(callback); 

// 2.匿名函数
doSomething(function() {
});

// 3.箭头函数
doSomething(() => {
});
```
- 案例
```js
setTimeout(() => {
  // runs after 2 seconds
}, 2000);
```

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

### 加载module
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



