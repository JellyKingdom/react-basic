import React from "react";
import Layout from "Layout";

function App() {
    
  //구조분해 할당!
  const testObj = {
    name : 'jiyun',
    age :32,
    company: 'Baek-su!'
  }

  const {name, age, company} = testObj;

  console.log('name', name);
  console.log('age',age);
  console.log('company',company);

    return (
      <Layout>
        <div>App 컴포넌트에서 보낸 값 입니다.</div>
      </Layout>
    );
}

export default App;
