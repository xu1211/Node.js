/**
 * 类继承
 * 
 * 
 */

//基类 / 父类
class Animal {
  constructor(name) {
    this.sitename = name;
  }
  eat() {
    console.log(this.sitename + "eat")
  }
  sleep() {
    console.log(this.sitename + "sleep")
  }
};

//派生类 / 子类
class Dog extends Animal {
  constructor(name, age) {
    // super调用父类构造函数
    super(name);
    this.age = age;
  }
  bark() {
    console.log(this.sitename + "bark")
  }
  printage() {
    console.log(this.sitename + this.age + "年")
  }
};

//实例化子类
let dog1 = new Dog("细狗", 5);
dog1.bark()
dog1.printage()
//可以使用父类 属性,方法
console.log(dog1.sitename)
dog1.eat()
dog1.sleep()