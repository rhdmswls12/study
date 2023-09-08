// 인터페이스(Interface)
// 함수 타입 - 호출 시그니처(Call Signature)

interface GetName {
  (message: string): string
}
interface User {
  name: string
  age: number
  getName: GetName
}
const apple: User = {
  name: 'Apple',
  age: 25,
  getName(message: string) {
    console.log(message)
    return this.name
  }
}
apple.getName('Hello')