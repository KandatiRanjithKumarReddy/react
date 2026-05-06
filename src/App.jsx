import './App.css'
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingSpinner from './Components/LoadingSpinner'
import { DataProvider } from './Context/exmapleContext'

// Lazy loaded components
const Display = lazy(() => import('./Components/Display'))
const RR1 = lazy(() => import('./Components/RR1'))
const RR2 = lazy(() => import('./Components/RR2'))
const RR3 = lazy(() => import('./Components/RR3'))
const RR = lazy(() => import('./Components/RR'))
const FromContext = lazy(() => import('./Components/FromContext'))
const Lp = lazy(() => import('./props/Lp'))
const Use_state = lazy(() => import('./Components/Use_state'))
const Use_effect = lazy(() => import('./Components/Use_effect'))
const Two_way_binding = lazy(() => import('./Components/Two_way_binding'))
const Zustand = lazy(() => import('./Components/Zustand'))
const React_hook_form = lazy(() => import('./Components/React_hook_form').then(module => ({ default: module.React_hook_form })))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <>
        {/* <Zustand /> */}
        
        <RR />
        <Routes>
          <Route path='/' element={<h1>This Is Home Page!</h1>} />
          <Route path='/RR1' element={<RR1 />} />
          <Route path='/RR2' element={<RR2 />} />
          <Route path='/RR3' element={<RR3 />} />
          <Route path='/Dispalyusers' element={<Display />} />

          <Route path='*' element={<h1>404 - Page Not Found</h1>} />
        </Routes> 


        {/* <DataProvider>
          <FromContext />
        </DataProvider> */}
        
        {/* <Display /> */}
        {/* <Lp name="Ranjith Reddy"/> */}
        {/* <Use_state /> */}
        {/* <Use_effect/> */}
        {/* <Two_way_binding/> */}
        {/* <React_hook_form/> */}


        
      </>
    </Suspense>
  )
}

export default App
