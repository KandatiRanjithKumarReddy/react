import React from 'react'
import { useStore } from '../store/Zustand_store';

export default function Zustand() {
    const{count, increment, decrement} = useStore();
  return (
    <div>
        <button style={{margin: '10px'}} onClick={increment}>+</button> 
        <button style={{margin: '10px'}} onClick={decrement}>-</button> 
        <h1>Zustand Counter: {count}</h1>

    </div>
  )
}
