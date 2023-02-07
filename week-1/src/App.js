import React, { useState } from "react";
import Layout from "Layout";
import 'App.css';

function App() {
    return (
      <>
      <Layout>
        <div>Style project</div>
        
      </Layout> 

      <div className="container">
          <div className="vegetable">감자</div>
          <div className="vegetable">고구마</div>
          <div className="vegetable">오이</div>
          <div className="vegetable">가지</div>
          <div className="vegetable">옥수수</div>
        </div>
      
    

      </>
    );
}

export default App;
