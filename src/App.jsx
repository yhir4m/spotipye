import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './views/Home'
import Token from './views/token'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/token" element={<Token/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
