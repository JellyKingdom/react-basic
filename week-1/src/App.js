import "App.css";

//자식 컴포넌트
function Child() {
    return <div>나는 자식입니다.</div>;
}

//부모 컴포넌트
function App() {
    return (
        <>
          <Child />
        </>
    );
}

export default App;
