
//1. 可选属性: 在属性名称后添加 ?
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//2. 联合类型 两种或多种其他类型组成的类型 string | number
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// Both OK
printId(101);
printId("202");
//printId({ myID: 22342 }); // Error


//3. 类型别名
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });


