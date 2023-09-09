// 타입 별칭(Alias)

type TypeA = string
type TypeB = string | number | boolean
type User = {
  name: string,
  age: number,
  isValid: boolean
} | [string, number, boolean] // 객체 타입 또는 튜플 타입으로 지정

const userA: User = {
  name: 'Apple',
  age: 25,
  isValid: true
}
const userB: User = ['Banana', 20, false]

function someFunc(param: TypeB): TypeA {
  switch(typeof param) {
    case 'string':
      return param.toUpperCase()
    case 'number':
      return param.toFixed(2)
    default:
      return 'Boolean' 
  }
}