import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Input = ({setData}) => {
    const fetchData = async () => {
        const result = await fetch("http://localhost:88/monitorok")
        const adat = await result.json()
        setData(adat)
    }
    const [tipus, setTipuse] = useState("")
    const [meret, setMeret] = useState("")
    const addMonitor = async () => {
        const adat = { tipus, meret }
        const result = await axios.post("http://localhost:88/monitor", adat)
        await fetchData()

    }
    return (
        <div className='feherdoboz'>
            <label>Típus:</label> <input onChange={(e) => setTipuse(e.currentTarget.value)} type='text' />

            <label>Méret:</label> <input onChange={(e) => setMeret(e.currentTarget.value)} type='text' />
            <button onClick={() => addMonitor()}>Hozzáad</button>
        </div>
    )
}

export default Input
