import React, { useState } from 'react'

function Use_state() {
    const [butoncount , setbuttoncount] = useState(0);
  return (
    <div>
        <button onClick={() => setbuttoncount(butoncount + 1)}>Click Me</button>
        <h1>Button Clicked {butoncount} times</h1>
    </div>
  )
}

export default Use_state