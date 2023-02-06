import React, { useState } from "react";
import Layout from "Layout";

function App() {
  const [counter, setCounter] = useState(0);

    return (
      <>
      <Layout>
        <div>Counter App</div>
      </Layout>
      
      </>
    );
}

export default App;
