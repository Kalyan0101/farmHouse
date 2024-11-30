import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Scroll from './components/ScrollBar/Scroll'

function App() {  

  return (
    <>
    <Header/>
    <Scroll />
    </>
  )
}

export default App
