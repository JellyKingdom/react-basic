import React, { useState } from "react";
import Layout from "Layout";
import "App.css";

function App() {
    const users = [
        { id: 1, age: 30, name: "송중기" },
        { id: 2, age: 24, name: "송강" },
        { id: 3, age: 21, name: "김유정" },
        { id: 4, age: 29, name: "구교환" },
    ];

    return (
        <>
            <Layout>
                <div>component practice</div>
            </Layout>

            <div className="app-style">
              {
                users.map(function(item){
                  return (
                    <div key={item.id} className="component-style">{item.age} - {item.name}</div>
                  )
                })
              }

              {/* <div className="component-style">{users[0].age} - {users[0].name}</div>
              <div className="component-style">{users[1].age} - {users[1].name}</div>
              <div className="component-style">{users[2].age} - {users[2].name}</div>
              <div className="component-style">{users[3].age} - {users[3].name}</div> */}
            </div>

        </>
    );
}

// <div className="vegetable">{item}</div>

export default App;
