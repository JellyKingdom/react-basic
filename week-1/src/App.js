import React from "react";
import Layout from "Layout";
import Child from "Child";

function App() {
    const name = 'test';
    return (
      <Layout>
        <Child age={32} name={name}>이름</Child>
      </Layout>
    );
}

export default App;
