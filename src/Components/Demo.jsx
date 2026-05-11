import React from 'react'
import { useState } from 'react'
import './Demo.css'
import { nthPrime } from '../utils.js/Prime'
import { useMemo } from 'react'
function Demo() {
    const [temp,settemp]=useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    console.log("Rendring...")
    const prime = useMemo(() => nthPrime(temp),[])
   
  return (
    <div className={isDarkTheme ? 'demo-container dark-theme' : 'demo-container light-theme'}>
        <button className="theme-toggle" onClick={() => setIsDarkTheme(!isDarkTheme)}>
            {isDarkTheme ? '☀️ Light' : '🌙 Dark'}
        </button>
        <div>
            <input type="number" placeholder='Enter your name' value={temp} onChange={(e)=>settemp(e.target.value)}/>
        </div>
        <div>
            <p>Nth Prime:{prime} </p>
        </div>
    </div> 
  )
}

export default Demo