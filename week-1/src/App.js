import React from "react";

function App() {
    const name = '상위컴포넌트 이름';
    return (
      <>
      <div>
        <User propsname={name}/>
      </div>
      </>
    );
}

function User(props){
  return <div> {props.propsname}의 하위 컴포넌트</div>
}

export default App;
