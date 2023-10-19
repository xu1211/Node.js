//隐式参数: 实际传过来的参数（实参）

//1. 函数有内置的隐式参数 arguments 对象: 存储了函数在调用时传入的所有实参
findMax(1, 123, 500, 115, 44, 88);
function findMax() {
    var i, max = arguments[0];
    
    if(arguments.length < 2) return max;
 
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return console.log(max);
}
console.log();

//2. arguments 同时与形参声明的顺序相同
function fn(arg1, arg2, arg3){
    console.log(arg1 === arguments[0]);  // true
    console.log(arg2 === arguments[1]);  // true
    console.log(arg3 === arguments[2]);  // true
}
fn(1,2,3);
console.log();

//3. 通过解构的方式得到实参
function fn2(...args){ 
    console.log(args instanceof Array);  // args 是真正的数组
    console.log(args);  // 而且 args 中也保存了传入的实参
}
fn2(1,2,3);
console.log();

//4. 值传递: 隐式参数通过值来传递, 不会修改显式参数
function valueTransfer(theVelue) {
  theVelue = "two";
}
var value = "one";
console.log(value)
valueTransfer(value)
console.log(value)
console.log()

//5. 引用传递: 会修改值
function referenceTransfer(theObject) {
  //实参 mycar 和形参 theObject 指向同一个对象。
  theObject.brand = "Toyota";
}
//mycar = 对象的引用
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};
console.log(mycar.brand);
referenceTransfer(mycar);//将对象引用传给函数
console.log(mycar.brand);//弹出 'Toyota',对象的属性已被修改。
