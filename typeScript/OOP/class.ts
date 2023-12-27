
// 可以指定 属性,方法
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// 类的继承
class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    study(): void {
        console.log(`${this.name} is studying.`);
    }
}

// 使用类: 实例化为对象
const person1 = new Person("Alice", 25);
person1.sayHello();

const person2 = new Person("Bob", 1);
person2.sayHello();

const student = new Student("Bob", 18, 12);
student.sayHello();
student.study();
