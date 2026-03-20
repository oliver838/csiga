import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Lista = ({data,setData}) => {
   

    const handleDelete = (i) => {
        setData(prev => prev.filter((obj, index) =>
            index != i && obj
        ))
    }
    return (
        <div className='feherdobozz'>
            {data?.map((obj, index) =>
                <div key={index} className='monitordoboz'>
                    <p>{obj.tipus}: {obj.meret}"</p>
                    <button style={{cursor:'pointer'}} onClick={() => handleDelete(index)}>🗑️</button>
                </div>
            )}
        </div>
    )
}

export default Lista
