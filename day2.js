// 불변성: 메모리에 있는 값을 변경할 수 없는 것.

let number = 1;
let secondNumber = 1;

// 원시데이터 : 숫자, 문자, 불리언..
console.log('number와 secondNumber가 일치하나요?');
console.log(number === secondNumber);   //true

// 원시데이터가 아닌 것들 : 배열, 객체, 함수...
let obj1 = {
    name: 'kim',
}

let obj2 = {
    name: 'kim',
}

console.log(obj1 === obj2); //false