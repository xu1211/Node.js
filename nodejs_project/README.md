
[toc]

## 配置 package.json

### 初始化 package.json

```sh
# -y 是指用默认值创建
npm init -y
```

### 创建 scripts 管理项目
```json
    "start": "运行程序 node ./src/index.js",
    "build": "编译项目",
    "test": "运行项目的测试",
    "lint": "ESLint检测"
```

### 通过 scripts 运行项目
```
npm run start 
```


## 添加 package
### 安装 jest包
```sh
# -save ：自动将模块和版本号添加到 dependencies 部分
# -save -dev ：自动将模块和版本号添加到 devdependencies 部分
npm install jest --save-dev
```
- 本地安装, 会安装在项目路径下 node_modules 目录
- package.json 文件会引入依赖
```
"devDependencies": {
   "jest": "^29.6.3"
 }
```

## 编写 .js 文件