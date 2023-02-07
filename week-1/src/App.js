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

            
        </>
    );
}

// <div className="vegetable">{item}</div>

export default App;
