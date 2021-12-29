import React from 'react'
import Nombres from './Nombres.jsx'

const ComponentePadre = () => {

    const nombres=['Luis','Carlos','Angel']
    
    return (
        <>
        <ul>
            {nombres.map(nombre=>(

             <>
              
              <Nombres nombres={nombre}/>

             </>

            ))}
        </ul>
            
        </>
    )
}

export default ComponentePadre
