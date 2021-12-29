import React, { Component } from "react";
import PropTypes from "prop-types";

class IterandoArraysObjetos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //ITERANDO ARRAYS

    //   const animales=['perro','gato','buho','murcielago']

    //     return (
    //         <>
    //         <ul>
    //          {animales.map(animal=>(

    //             <li>{animal}</li>

    //          ))}
    //         </ul>

    //ITERANDO ARRAYS DE OBJETOS

    const mascotas = [
      {
        id: 0,
        nombre: "Lucas",
        especie: "canina",
      },
      {
        id: 1,
        nombre: "Leo",
        especie: "felino",
      },
      {
        id: 2,
        nombre: "Pio",
        especie: "ave",
      },
      {
        id: 3,
        nombre: "Frito",
        especie: "Reptil",
      },
    ];

    return (
      <>
        <ul>
          {mascotas.map((mascota) => (
            <>
              <li key={mascota.id}>
                Nombre:{mascota.nombre}
                <br />
                Especie:{mascota.especie}
              </li>
            </>
          ))}
        </ul>
      </>
    );
  }
}

export default IterandoArraysObjetos;
