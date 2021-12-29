import React, { Component } from 'react'

 class EstilosEnLinea extends Component {
    
    
    render() {

        const estilos={
            
            backgroundColor:'green',
            height:'1000px',
            width:'100%',
            position:'absolute'
        }
        const titulo={
            color:'white'
        }

        return (
            <>
           
            <div style={estilos} className="container">

              <h1 style={titulo} >HOLA SOY UN TITULO</h1>

            </div>
                
            </>
        )
    }
}

export default EstilosEnLinea
