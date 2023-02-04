let [name, ...rest] = ["jiyun",32,"New York"];

console.log(name);  //jiyun
console.log(rest);  //[32, 'New York']

console.log("-".repeat(20));


let names = ["Steve", "John"];

let students = ["Tom",...names]; //  names를 그냥 넣으면 ['Tom',['Steve','John']]으로 나온다.

console.log(students);