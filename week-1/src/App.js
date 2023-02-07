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
          vegi.map(function(item){
            return <div className="vegetable">{item}</div>
          })
        }
        {
          vegi.map((item) => {
            return <div className="vegetable">{item}</div>
          })
        }
          {/* <div className="vegetable">감자</div>
          <div className="vegetable">고구마</div>
          <div className="vegetable">오이</div>
          <div className="vegetable">가지</div>
          <div className="vegetable">옥수수</div> */}
      </div>
      
    

      </>
    );
}

export default App;
