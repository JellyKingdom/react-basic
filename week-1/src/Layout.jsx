import React from "react";

function Layout(props) {
    return (
        <>
        <header
            style={{
                margin: "10px",
                border: "1px solid red",
            }}
        >
            React practice!
        </header>
        {props.children}
        </>
    );
}

export default Layout;
