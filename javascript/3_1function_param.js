//显示参数: 形式参数（形参）

//1. 形参不需要显式声明类型
function myFunction(x, y) {
    return console.log(x,y)
}
console.log()

//2. 实参个数 形参个数 可以不一样
myFunction()
myFunction(1)
myFunction(1,2)
myFunction(1,2,3)
console.log()

//1. 默认形参: undefined
myFunction1(1);
function myFunction1(x, y) {
    // if (y === undefined) {
    //       y = 0;
    // }
    return console.log(x,y)
}
console.log()

//2. 自带形参
myFunction2(0, 2);
myFunction2(5);
function myFunction2(x, y = 10) {
    // y is 10 if not passed or undefined
    return console.log(x,y)
}
console.log()