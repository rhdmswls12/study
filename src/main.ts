// 인터페이스(Interface)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)

// 배열
interface Fruits {
  [item: number]: string
}
const fruits: Fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)

//객체
interface User {
  [key: string]: unknown
  name: string
  age: number
}
const apple: User = {
  name: 'Apple',
  age: 25
}
apple['isValid'] = true
apple['emails'] = ['thesecond@gmail.com', 'test@gmail.com']
console.log(apple)

interface Payload {
  [key: string]: unknown
}
function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key])
  }
}
interface Users {
  [key: string]: unknown
  name: string
  age: number
  isValid: boolean
}
const banana: Users = {
  name: 'Banana',
  age: 20,
  isValid: true
}
logValues(banana)