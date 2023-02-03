if( 1 == 1 ){
    //항상 이 안으로 들어와요
    var a = 3;
    console.log("inside a", a); //당연히 나온다
}

console.log("outside a", a);    // 나옴..! 왜..??
//var는 block level scope가 아니기때문에 여기서도 나온다.
//웬만하면 var키워드는 쓰지 말자!