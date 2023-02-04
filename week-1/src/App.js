import React from "react";

//props를 통해 부모 -> 자식 데이터가 전달된다.
function Child(props){
  console.log("props",props.motherName);
  return <div>나는 {props.grandFatherName}과 {props.motherName} 을 아는 자식이에요!</div>;
}

//부모 -> 자식 정보를 전달했다!
function Mother(props){
  const name = '엄마이름';
  return <Child grandFatherName={props.grandFatherName} motherName={name}/>;
}

function GrandFather(){
  const name ='할아버지 이름'
  return <Mother grandFatherName={name} />;
}

function App() {

    return (
        <>
          <GrandFather/>
        </>
    );
}

export default App;
