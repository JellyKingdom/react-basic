const User = ({ item, removeButtonHandler }) => {
    return (
        <div key={item.id} className="component-style">
            {item.age} - {item.name}
            <button onClick={() => removeButtonHandler(item.id)}>x</button>
            {/* 매개변수를 넘겨줄 경우 앞에 () => 로 꼭 감싸줄 것!*/}
        </div>
    );
};

export default User;