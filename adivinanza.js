const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado == numeroSecreto) {
    console.log("Felicidades! Adivinaste el numero secreto!");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El numero secreto es menor! sigue intentando");
  } else {
    console.log("El numero es mas grande! sigue intentado");
  }
};

module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};
