const obj1 = {
    value1: 10,
};

const obj2 = obj1;
obj2.value1 += 1;

// 만약에 우리가 복사한 obj2를 바꾼다면 어떻게 될까?
// 예상: obj2가 바뀌면 된다! 간단하게!
// 실제: obj1도 함께 바뀐다 ..?

console.log('obj1',obj1);
console.log('obj2',obj2);

//이런 현상을 얕은 복사라고 한다.


const obj3 = JSON.parse(JSON.stringify(obj1));
//새로운 주소값을 반환하는 방법을 제공함, stringify로 obj1을 받아서 parse로 묶어주면 아예 새로운 주소 값을 생성!
//이건 깊은 복사!

obj3.value1 += 3;

console.log('obj3',obj3);