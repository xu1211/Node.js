/**
 * var
 * let
 */

//声明变量
let myName;
let myAge;
//初始化
myName = "Chris";
myAge = 37;
//使用
myName;
myAge;
// scoobyDoo;


//Number
let youAge = 17;
console.log(youAge)
console.log()

//String
let dolphinGoodbye = "So long and thanks for all the fish";
console.log(dolphinGoodbye)
console.log()

//Boolean
let iAmAlive = true;
let test = 6 < 3;
console.log(iAmAlive);
console.log(test)
console.log()

//Array
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
let cars = new Array("Saab", "Volvo", "BMW");

console.log(myNameArray[0]); // should return 'Chris'
console.log(myNumberArray[2]); // should return 40
console.log(cars[2]);
console.log()


//Object
var person = {
  firstname: "John",
  lastname: "Doe",
  id: 5566
};
//Object 两种寻址方式
console.log(person.lastname)
console.log(person["lastname"])
