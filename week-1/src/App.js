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

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  }

  //추가 버튼
  const addButtonHandler = () => {
    //1. 새로운 형태의 { id: 1, age: 30, name: "송중기" }를 만든다.
    //2. 위 객체를 배열에 더한다.

  const newUsers = {
    id: users.length + 1,
    age,  //age : age로 써도 됨
    name : name,
  }
    //setUsers([...users, newUsers]) means 원래 있던 users를 푼 다음, new Users를 다시 넣은 것! 불변성 유지를 위해!
    setUsers([...users,newUsers]);
  }

  //삭제버튼(x)
  const removeButtonHandler = (id) => {
    // users.filter(user => user.id !== 어떤값)
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);

  }


    return (
        <>
            <Layout>
                <div>component practice</div>
            </Layout>
            <div>
              <div>
              이름 : <input 
              value={name} 
              onChange={nameChangeHandler} />
              나이 : <input 
              value={age}
              onChange={ageChangeHandler}/>
              <Button Button addButtonHandler={addButtonHandler}> 추가</Button>
              </div>
            <div className="app-style">
              {
                users.map(function(item){
                  return (
                    <User 
                    key={item.id}
                    item={item} removeButtonHandler={removeButtonHandler}/>
                  )
                })
              }

            </div>

            </div>


        </>
    );
}

const Button = ({addButtonHandler, children}) => {
  return <button
  onClick={addButtonHandler}
  >{children }</button>
}

const User = ({item, removeButtonHandler}) => {
  return(
    <div key={item.id} className="component-style">{item.age} - {item.name}
      <button onClick={() =>removeButtonHandler(item.id)}>x</button>
      {/* 매개변수를 넘겨줄 경우 앞에 () => 로 꼭 감싸줄 것!*/}
    </div>
  )
}

// <div className="vegetable">{item}</div>

export default App;
