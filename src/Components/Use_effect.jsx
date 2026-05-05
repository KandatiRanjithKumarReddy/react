import React, { useState,useEffect} from 'react'

function Use_effect() {
    const [butoncount , setbuttoncount] = useState(0);

    useEffect(()=>{
        console.log("page Reloaded")
    },[])

    useEffect(()=>{
        console.log(`button clicked ${butoncount} Times`);

    },[butoncount])
  return (
    <div>
        <button onClick={() => setbuttoncount(butoncount + 1)}>Click Me</button>
        <h1>Button Clicked {butoncount} times</h1>
    </div>
  )
}

export default Use_effect