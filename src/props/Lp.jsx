import React from 'react'
//basic props
// function Lp(props) {
//   return (
//     <div>
//         <h1>{props.name} is {props.age} Old</h1>
//     </div>
//   )

  
// }


//props Destructuring
// function Lp({ name, age }) {
//   return <h1>{name} is {age} years old</h1>;
// }

//setting default values
function Lp({ name="Guest", age=25 }) {
  return <h1>{name} is {age} years old</h1>;
}



export default Lp