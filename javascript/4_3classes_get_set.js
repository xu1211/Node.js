/**
 * 严格模式下, 类中可以使用 getter 和 setter 来获取和设置值
 */

class Runoob {
  constructor(name) {
    this.sitename = name;
  }
  get s_name() {
    return this.sitename;
  }
  set s_name(x) {
    this.sitename = x;
  }
}

let noob = new Runoob("菜鸟教程");
// getter方法不用括号
console.log(noob.s_name)
// 