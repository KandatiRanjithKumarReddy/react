import './App.css'
import Display from './Components/Display'
import { Routes, Route } from 'react-router-dom'
import RR1 from './Components/RR1'
import RR2 from './Components/RR2'
import RR3 from './Components/RR3'
import RR from './Components/RR'
import { DataProvider } from './Context/exmapleContext'
import FromContext from './Components/FromContext'
import Lp from './props/Lp'
import Use_state from './Components/Use_state'
import Use_effect from './Components/Use_effect'
import Two_way_binding from './Components/Two_way_binding'
import Zustand from './Components/Zustand'
import { React_hook_form } from './Components/React_hook_form'

function App() {
  return (
    <>
      {/* <Zustand /> */}
      
      {/* <RR />
      <Routes>
        <Route path='/' element={<h1>This Is Home Page!</h1>} />
        <Route path='/RR1' element={<RR1 />} />
        <Route path='/RR2' element={<RR2 />} />
        <Route path='/RR3' element={<RR3 />} />
        <Route path='/Dispalyusers' element={<Display />} />

        <Route path='*' element={<h1>404 - Page Not Found</h1>} />
      </Routes> */}

      {/* <DataProvider>
        <FromContext />
      </DataProvider> */}
      
      {/* <Display /> */}
      {/* <Lp name="Ranjith Reddy"/> */}
      {/* <Use_state /> */}
      {/* <Use_effect/> */}
      {/* <Two_way_binding/> */}
      <React_hook_form/>


      
    </>
  )
}

export default App
