import React, { useState } from "react";
import Layout from "Layout";

function App() {

    const[fruit, setFruit] =useState("");

    return (
      <>
      <Layout>
        <div>STATE에 대한 이야기입니다.</div>
      </Layout>
      <div>
        과일 : <input value={fruit} onChange={(e) => {
          // console.log(e.target.value);
          setFruit(e.target.value);
        }}/>
      </div>
      {fruit}
      </>
    );
}

export default App;
