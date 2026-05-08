import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
const list = [];

// function Usecallback() {
//     const [state ,setState]=useState(0);
//     const plus=()=>{
//         setState(state+1);  
//     } 
//     //refer to diff memory location in heap After Every Re-Render
//     list.push(plus);
//     if(list.length === 2){
//         console.log(list);
//         console.log(list[0]===list[1]);
//     } 
//   return (
//     <div>
//         <h1>Use Callback </h1>
//         <p>count :{state}</p>
//         <button onClick={plus}>+</button>
//     </div>
//   )
// }

function Usecallback() {
    const [state, setState] = useState(0);
    //usecallback(fun,darray):canches the function and 
    //return the same function until the dependency array changes 
    //useCallback memoizes a function.
//It prevents a function from being recreated on every render.
    const temp = useCallback(() => {
        setState((state) => state + 1);
    }, [state < 2 ?0:state]);

    list.push(temp);
    if (list.length === 3) {
        console.log(list);
        console.log(list[0] === list[1]);
        console.log(list[0] === list[3]);
    }
    return (
        <>
            <h1>Use Callback </h1>
            <p>count :{state}</p>
            <button onClick={temp}>+</button>
        </>
    )
}

export default Usecallback
