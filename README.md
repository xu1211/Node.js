[toc]

# Node.js
Learning Node.js

Node.js 是 JavaScript的运行容器
一个node.js只用一个cpu，单线程

## install
下载 https://dev.nodejs.cn/download/package-manager/
```
node -v
```
### nvm 切换版本
轻松切换 Node.js 版本，并安装新版本以尝试在出现问题时轻松回滚
https://github.com/nvm-sh/nvm

### NPM 包管理
随同NodeJS一起安装的包管理工具
```
npm -v
```

升级npm
```
npm install npm -g
```

#### npm安装模块

```shell
//清空NPM本地缓存
npm cache clear
//搜索
npm search <Module Name>
//安装
npm install <Module Name>
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
#### package.json
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
  "dependencies": {依赖包列表},
  "devDependencies": {}
}
```