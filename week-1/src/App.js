import React, { useState } from "react";
import Layout from "Layout";

function App() {

    const [id,setId] = useState("");
    const [pw, setPw] = useState("");

    return (
      <>
      <Layout>
        <div>STATE에 대한 이야기입니다.</div>
      </Layout>
      <div>
        아이디 : <input type="text" value={id} onInput={(e) => {
          setId(e.target.value);
          }}/>
        <br/>
        비밀번호 : <input type="password" value={pw} onChange={(e) => {
          setPw(e.target.value);
        }}/>
      </div>

      <button onClick={()=>{
        alert(`입력하신 아이디는 ${id}, 비밀번호는 ${pw}입니다.`);
      }}>로그인</button>
      </>
    );
}

export default App;
