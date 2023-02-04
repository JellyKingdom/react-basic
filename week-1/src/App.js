import React from "react";

function Child(){
  return <div>나는 자식이에요!</div>;
}

//부모 -> 자식 정보를 전달했다!
function Mother(){
  const name = '엄마이름!';
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
