import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Input from './components/Input'
import Lista from './components/Lista'

function App() {

  return (
   <div className='container'>
    
     <Input/>
      <Lista/>
   </div>
  )
}

export default App
