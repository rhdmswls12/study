// 클래스

// 접근 제어자(Access Modifiers)
// public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능(매개변수에서 사용하는 경우에는 생략 불가)
// protected - 나와 파생된 후손 클래스 내에서 접근 가능
// private - 내 클래스에서만 접근 가능

class UserA {
  public first: string
  protected last: string
  private age: number
  constructor(first: string, last: string, age: number) {
    this.first = first
    this.last = last
    this.age = age
  }
  setAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}
class UserB extends UserA {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}` // age는 private이므로 에러
  }
}
class UserC extends UserB {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}` // age는 private이므로 에러
  }
}

const neo = new UserA('Neo', 'Kim', 30)
console.log(neo.first) // 자유롭게 접근 가능
console.log(neo.last) // 에러(해당 클래스와 이를 상속하는 후손 클래스가 아닌, 클래스 바깥에서 사용했기 때문)
console.log(neo.age) // 에러(private이므로 UserA에서만 사용 가능)