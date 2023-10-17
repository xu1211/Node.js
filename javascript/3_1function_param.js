
/* 定义函数 myFunc */
function myFunc(theObject) {
  //实参 mycar 和形参 theObject 指向同一个对象。
  theObject.brand = "Toyota";
}

/*
 * 定义变量 mycar;
 * 创建并初始化一个对象;
 * 将对象的引用赋值给变量 mycar
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};
console.log(mycar.brand);

/* 将对象引用传给函数 */
myFunc(mycar);

/*
 * 弹出 'Toyota',对象的属性已被修改。
 */
console.log(mycar.brand);
