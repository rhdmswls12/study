// Assertion

// 1)
const el = document.querySelector('body') as HTMLBodyElement
if (el) {
  el.textContent = 'Hello world'
}

// 2)
function getNumber(x: number | null | undefined) {
  if (x) {
    return Number(x.toFixed(2))
  }
}
getNumber(3.141592)
getNumber(null)

// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2))
  }
  return (x as string).toUpperCase()
}
getValue('hello world', false) // 'HELLO WORLD'
getValue(3.141592, true) // 3.14