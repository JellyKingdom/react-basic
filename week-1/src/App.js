import React, { useState } from "react";
import Layout from "Layout";

function App() {
  const [obj, setObj] = useState({
    name: "jiyun",
    age: 32,
  });

    return (
      <>
      <Layout>
        <div>불변성 강의 중!</div>
      </Layout>
      <div>{obj.name}</div>
      <button onClick={()=>{
        obj.name = "jiyunHan"
        console.log(obj);
        setObj(obj);
        // 콘솔은 찍히지만 렌더링되지는 않는다! 새로운 객체를 만들어줘야한다.
      }}>
      클릭!!</button>

      </>
    );
}

export default App;
