import React from "react";

function Child(){
  return <div>안녕하세요 자식입니다!</div>;
}

function Mommy(){
  return <Child />;
}

function GrandFa(){
  return <Mommy />;
}

function App(){
  return <GrandFa/>;
}

export default App;