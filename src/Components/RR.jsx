import React from 'react'
import { Link } from 'react-router-dom'

function RR() {
  return (
    <>
    <li>
        <Link to='/'>Home</Link>
    </li>
    <li>
        <Link to='/RR1'>Lets Go to RR1</Link>
    </li>
     <li>
        <Link to='/RR2'>Lets Go to RR2</Link>
    </li>
     <li>
        <Link to='/RR3'>Lets Go to RR3</Link>
    </li>
    <li>
        <Link to='/Dispalyusers'>users</Link>
    </li>

    </>
  )
}

export default RR