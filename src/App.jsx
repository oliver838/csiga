import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Input from './components/Input'
import Lista from './components/Lista'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    const result = await fetch("http://localhost:88/monitorok")
    const adat = await result.json()
    setData(adat)
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className='container'>

      <Input setData={setData} />
      <Lista data={data} setData={setData}/>
    </div>
  )
}

export default App
