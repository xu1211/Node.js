/**
 * 闭包
 * 
 * 功能: 函数内部创建一个内部函数,该内部函数可以访问外部函数的变量和参数
 * 作用: 
 *  1. 封装变量: 避免全局变量,作用域在内部
 *  2. 保护变量: 外部无法直接访问
 *  3. 延长变量的生命周期: 外部函数执行完毕后依旧可用
 *  4. 模块化
 */

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
 
add();
add();
add();
 
// 计数器为 3