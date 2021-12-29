import React, { Component } from 'react'

class Estados extends Component {
    constructor(props) {
        super(props)

        this.state={
             
             name:"Maria",
             apellidos:"Martinez Perez"
        }

    }
    
    cambiarDatos(){
        if(this.state.name==="Maria" && this.state.apellidos==="Martinez Perez")
           this.setState({name:"Lourdes",apellidos:"Gutierrez Garcia"})
           else
              this.setState({name:"Maria",apellidos:"Martinez Perez"})
    }
    

    render () {
        return (
            <>
            <h1>Mi nombre es {this.state.name} {this.state.apellidos}</h1>
          <button onClick={this.cambiarDatos.bind(this)}>Cambiar Datos</button>
            </>  
        )
}

}
export default Estados