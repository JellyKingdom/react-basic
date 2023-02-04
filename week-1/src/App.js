import React from "react";

function App() {
    
    return (
      <>
      <div>
        <User>안녕하세요!</User>
      </div>
      </>
    );
}

function User(props){
  console.log(props);
  return <div></div>;
}

export default App;
