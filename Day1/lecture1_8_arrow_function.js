function mysum (x,y){
    return x + y;
}

const mysum2 = (x,y) => {
    return x + y;
}

const mysum3 = (x,y) => x + y;  //return문이 한줄이라면 이렇게 중괄호를 빼고 사용할 수 있다.

console.log(mysum(1,1));
console.log(mysum2(2,2));
console.log(mysum3(3,3));