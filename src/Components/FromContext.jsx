import React from 'react'
import { useData } from '../Context/exmapleContext'

function FromContext() {
    const {data} =useData();
  return (
    <>
     <h1>I Am Coimg From Context<br/><br/>My Name is :{data}</h1>
    </>
  )
}

export default FromContext