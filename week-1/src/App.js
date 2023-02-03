import logo from './logo.svg';
// import './App.css';
import 'App.css';

function App() {
  //여기가 자바스크립트를 쓸 수 있는 영역입니다.
  const a = 1;
  function test(){
    console.log("test 입니다!");
  }


  return (
    //리턴문 안쪽에서는 JSX문법을 쓸 수 있다.
    // JSX(Javascript + XML - HTML): 쟉스~
    // {}
    <div className="App">
      <p>Hello react</p>
      <button onClick={test}> 클릭해보세요 </button>
    </div>
  );
}

export default App;
