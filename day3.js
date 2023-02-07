const test =[ 1,2,3 ];

console.log(test.map(function(i){
    return i * 2;
}));    //2,4,6

console.log(test);  //1,2,3

//map 함수는 원래 데이터를 가공하여 출력하는 방법이다.