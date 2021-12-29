import React from 'react'

const ComunicacionComponentes = (props) => {
    
    
    console.log(props)

const saludar=()=>{
  props.saludoHermano()
}
    
    return (
        <>

        <h1>El nombre es {props.nombre} {props.apellidos}</h1>

        <button onClick={saludar}>Saludo</button>
            
        </>
    )
}

export default ComunicacionComponentes
