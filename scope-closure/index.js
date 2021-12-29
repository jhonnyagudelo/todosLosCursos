function crearContador(contador = 0) {
  return {
    incrementar: function () {
      contador += 1;
      return contador;
    },
    decrementar: function () {
      contador += -1;
      return contador;
    },
    obtenerValor: function () {
      return contador;
    },
  };
}

const contador1 = crearContador(100);
contador1.decrementar();
