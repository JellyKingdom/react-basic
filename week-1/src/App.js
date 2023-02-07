import React, { useState } from "react";
import Layout from "Layout";
import 'App.css';

function App() {

    const vegi = ['감자','고구마','오이','가지','옥수수'];

    return (
      <>
      <Layout>
        <div>Style project</div>
        
      </Layout> 

      <div className="container">
        {
          vegi.filter(function(item){
            return item !== "오이";
          })
          .map(function(item){
            return <div className="vegetable">{item}</div>
          })
        }
      </div>
      
    

      </>
    );
}

// <div className="vegetable">{item}</div>

export default App;
