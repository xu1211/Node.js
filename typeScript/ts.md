
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



### TypeScript配置文件
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





## 面向对象编程

