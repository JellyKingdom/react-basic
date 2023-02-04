// JS에서 말하는 object
// key - value pair

/*
항상 키와 벨류는 pair 이다.
{
    key1: 'value',
    key2: 'value2'
}
*/

const name = 'jiyun';
const age = 32;

const testObj = {
    name: name,
    age,    //key와 value가 같은 모양이면 여기에 value값 넣기 생략 가능 (age : age라고 썼었음)
    company: 'Baek-su!',
    doSomething: () => {}   //여기에 함수가 올수도 있고, 화살표함수로도 쓸 수 있다.
}