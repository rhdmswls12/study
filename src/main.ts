// 클래스

// 접근 제어자(Access Modifiers)
// public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능(매개변수에서 사용하는 경우에는 생략 불가)
// protected - 나와 파생된 후손 클래스 내에서 접근 가능
// private - 내 클래스에서만 접근 가능

class UserA {
  constructor(
    public first: string, 
    public last: string, 
    public age: number
    ) {
  }
  setAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}
class UserB extends UserA {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}` 
  }
}
class UserC extends UserB {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}

const neo = new UserA('Neo', 'Kim', 30)
console.log(neo.first) 
console.log(neo.last) 
console.log(neo.age) 