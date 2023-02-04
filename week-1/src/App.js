import React, { useState } from "react";
import Layout from "Layout";

function App() {

    const [name, setName] = useState('김할아버지');
    return (
      <>
      <Layout>
        <div>STATE에 대한 이야기입니다.</div>
      </Layout>
      <div>
        {name}<br/>
        <button onClick={function(){
          setName('박할아버지');
        }}>클릭</button>
      </div>
      </>
    );
}

export default App;
