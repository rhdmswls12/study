// 제네릭(Generic)
// 함수
interface Obj {
  x: number
}
type Arr = [number, number]

function toArray<T>(a: any, b: any) {
  return [a, b]
}
function toArray2<T>(a: T, b: T) {
  return [a, b]
}
console.log(
  toArray<string>('hi', 'hello'),
  toArray<number>(1, 2),
  toArray2(true, false),
  toArray2<Arr>([1, 2], [3, 4])
)

// 클래스
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
const apple = new User<UserAType>({
  name: 'apple',
  age: 18,
  isValid: true
})