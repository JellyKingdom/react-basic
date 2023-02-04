import React, { Children } from "react";


function Child({age, name, Children}) {
    console.log(age);
    console.log(name);
    console.log(Children);
    return <div>Child</div>;
}

export default Child;
