import React, { useState } from "react";
import Layout from "Layout";
import Child from "Child";

function App() {
    // state를 쓰는 목적!
    // UI를 바꾸기 위해서다!
    
    // hook
    const [state,setState] = useState('initial Value');
    //--> [state, setState]

    return (
      <Layout>
        <div>STATE에 대한 이야기입니다.</div>
      </Layout>
    );
}

export default App;
