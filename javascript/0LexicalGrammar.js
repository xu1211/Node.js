
//动态类型
let foo = 42; // foo 现在是一个数值
console.log(typeof foo)
foo = "bar"; // foo 现在是一个字符串
console.log(typeof foo)
foo = true; // foo 现在是一个布尔值
console.log(typeof foo)


//弱类型
foo = 42; // foo 现在是一个数值
const result = foo + "1"; // JavaScript 将 foo 强制转换为字符串，因此可以将其与另一个操作数连接起来
console.log(result); // 421


//原始值
