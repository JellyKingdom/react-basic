import React from "react";

//props를 통해 부모 -> 자식 데이터가 전달된다.
function Child(props){
  console.log("props",props.motherName);
  return <div>나는 {props.motherName} 을 아는 자식이에요!</div>;
}

//부모 -> 자식 정보를 전달했다!
function Mother(){
  const name = '엄마이름';
  return <Child motherName={name}/>;
}

function GrandFather(){
  return <Mother />;
}

function App() {

    return (
        <>
          <GrandFather/>
        </>
    );
}

export default App;
