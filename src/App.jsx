import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Home from './views/Home'
import Token from './views/token'
import NavBar from "./components/navbar/navbar"
import { fetchData,getTopGenres } from './utils/callToken'
import artistsFunction from './utils/artists/artistsFunctions'
import { createContext, useContext } from 'react';


export const artistContext = createContext();

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const [animationFinished,setAnimationFinished] = useState(true);

  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <artistContext.Provider value={{animationFinished,setAnimationFinished}}>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/token" element={<Token/>}></Route>
        </Routes>
        </artistContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
