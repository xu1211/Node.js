// 函数可以具有 参数和返回; 可以指定 参数的类型. 返回值的类型
function add(x: number, y: number): number {
    return x + y;
}

// 可以作为变量进行声明和赋值
const multiply: (x: number, y: number) => number = (x, y) => x * y;

// 可以作为类型
type AddFunction = (x: number, y: number) => number;

// function使用
// 1. 直接调用函数
const sum = add(2, 3);
const product = multiply(2, 3);

// 2. 作为类型使用
    // 变量类型
const addfun: AddFunction = (x, y) => x + y;
    // 入参类型
function calculate(op: AddFunction, x: number, y: number): number {
    return op(x, y);
}
    // 返回值类型
function createAddFunction(): AddFunction {
    return (x, y) => x + y;
}
    // interface类型
interface MathOperation {
    (x: number, y: number): number;
}
