import React, { useState, useRef } from 'react'


// function Usereff() {
//     const [count, setCount] = useState(0);
//     console.log("Component Rendered");
//     const user= {name: "ranjith Kumar reddy", age: 21 };
//     //1st Render User = #400 address in heap;
//     //2nd Render User = #500 address in heap;
//     list.push(user);
//     if (list.length === 2) {
//         console.log(list);
//         console.log(list[0] === list[1])
//     }
//     return (
//         <div>
//             <h1>Useref Hook</h1>
//             <h2>count :{count}</h2>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     )
// }

const list = [];

function Usereff() {
    const [count, setCount] = useState(0);
    console.log("Component Rendered");
    const reference= useRef({name: "ranjith Kumar reddy", age: 21 });
    //1st Render User = #400 address in heap;
    //2nd Render User = #500 address in heap;
    list.push(reference);
    if (list.length === 2) {
        console.log(list);
        console.log(list[0] === list[1])
    }
    return (
        <div>
            <h1>Useref Hook</h1>
            <h2>count :{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Usereff


