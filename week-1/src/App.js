import React, { useState } from "react";
import Layout from "Layout";
import "App.css";

function App() {
    // const users = [
    //     { id: 1, age: 30, name: "송중기" },
    //     { id: 2, age: 24, name: "송강" },
    //     { id: 3, age: 21, name: "김유정" },
    //     { id: 4, age: 29, name: "구교환" },
    // ];

    //단순 변수, 객체가 아니라 state로 써주자!

    const [users, setUsers] = useState([
      { id: 1, age: 30, name: "송중기" },
      { id: 2, age: 24, name: "송강" },
      { id: 3, age: 21, name: "김유정" },
      { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

    return (
        <>
            <Layout>
                <div>component practice</div>
            </Layout>
            <div>
              <div>
              이름 : <input 
              value={name} 
              onChange={(e) => {
                setName(e.target.value);
              }}/>
              나이 : <input 
              value={age}
              onChange={function(e){
                setAge(e.target.value);
              }}/>
              </div>
            <div className="app-style">
              {
                users.map(function(item){
                  return (
                    <div key={item.id} className="component-style">{item.age} - {item.name}</div>
                  )
                })
              }

            </div>

            </div>


        </>
    );
}

// <div className="vegetable">{item}</div>

export default App;
