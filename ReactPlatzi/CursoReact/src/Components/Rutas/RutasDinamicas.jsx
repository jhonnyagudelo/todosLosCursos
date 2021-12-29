import React from 'react'

const RutasDinamicas = (props) => {

    console.log(props)
    
    
    return (
        <>

        <h1>El usuario elegido es:{props.match.params.id}</h1>
            
        </>
    )
}

export default RutasDinamicas
