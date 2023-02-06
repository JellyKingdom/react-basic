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

console.log('obj1과 obj2가 일치하나요?');
console.log(obj1 === obj2); //false


//데이터를 수정하는 경우
number = 2;
console.log(number);    //메모리주소가 변경, 2 나온다.


obj1.name = 'park'; //객체는 불변성이 없다!
console.log(obj1.name); //park


//원시데이터 -> 메모리에 저장 된 값 자체를 바꾸는게 아니라 저장공간을 바꾸는것
//원시데이터가 아닌 데이터 -> 기존에 저장되어있던 공간을 그냥 바꿔버리는 것. 불변성 없음!


//React에서 화면이 변경될지 말지(렌더링 조건)를 정하는 것은 state의 변화이다.
//리액트는 화면을 렌더링할지를 State의 변화에 따라 결정한다!
//단순 변수는 무시한다!