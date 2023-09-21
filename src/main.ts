class User<P> {
  constructor(public payload: P) {}
  getPayload() {
    return this.payload
  }
}
interface UserAType {
  name: string
  age: number
  isValid: boolean
}
interface UserBType {
  name: string
  age: number
  emails: string[]
}
const apple = new User({
  name: 'apple',
  age: 18,
  isValid: true
})