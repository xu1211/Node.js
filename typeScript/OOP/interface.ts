// 定义对象的属性、方法和索引签名
interface Shape {
    color: string;
    area(): number;
}

// 1. 作为对象类型
const square: Shape = {
    color: "blue",
    area() {
        return 4 * 4;
    },
};

// 2. 作为 function 入参类型
function printShape(shape: Shape): void {
    console.log(`Color: ${shape.color}, Area: ${shape.area()}`);
}

printShape(square);

// 3. class 使用接口
class Circle implements Shape {
    color: string;
    radius: number;

    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}
