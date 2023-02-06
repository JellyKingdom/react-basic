import React, { useState } from "react";
import Layout from "Layout";

function App() {
  let [counter, setCounter] = useState(0);

    return (
      <>
      <Layout>
        <div>Counter App</div>
      </Layout>
      
        <div>{counter}</div>
      
        <button onClick={() => {
          counter = counter + 1;
          setCounter(counter);
        }}>+1</button>
        <button onClick={() => {
          counter = counter - 1;
          setCounter(counter);
        }}>-1</button>
      
    

      </>
    );
}

export default App;
