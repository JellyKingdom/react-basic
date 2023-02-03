//배열 또는 객체의 구조를 뜯어버린다.

//객체의 destructing
const person = {
    name: "지윤",
    age: 32,
};

const {name, age, likes} = person;

console.log("name",name);
console.log("age",age);
console.log("likes", likes);    //undefined

console.log("-".repeat(20));

//배열의 destructing

const testArr = [1,2,3];

const [one, two, three,four] = testArr;

console.log('one',one);
console.log('two',two);
console.log('three',three);
console.log('four',four);   //undefined
