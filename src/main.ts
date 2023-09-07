// 타입 추론(Inference)

// 1) 초기화된 변수
// 2) 기본 값이 설정된 매개 변수
// 3) 반환 값이 있는 함수

// 초기화된 변수 'num'
let num = 12

// 기본 값이 지정된 매개 변수 'b' + 반환 값이 확실한 함수 'add'
function add(a: number, b = 12) {
  return a + b
}