import React from "react";

function App() {

    const number = 11;

    const pTagStyle = {
      color: 'blue',
    }
    return (
        <>
            <div className="test-class">
              <p style={{color:'red'}}>안녕하세요 리액트입니다.</p>
              {/* 주석을 사용하는 방법입니다. */}
              {/* 삼항연산자를 사용해볼게요! */}
              <p style={pTagStyle}>{number > 10 ? number + '은 10보다 크다' : number + '은 10보다 작다.'}</p>
            </div>
        </>
    );
}

export default App;
