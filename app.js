const readlineSync = require("readline-sync");
const { generarNumeroAleatorio, verificarAdivinanza } = require("./adivinanza");

const obtenerNumeroUsuario = () => {
  return readlineSync.question("Ingrese un numero: ");
};

const juegoAdivinanza = () => {
  const numeroSecreto = generarNumeroAleatorio();
  let numeroAdivinado = 0;

  console.log("Bienvenido a adivina el numero secreto!");
  console.log("Intenta adivinar el numero secreto entre el 1 y el 100. \n");

  while (numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = obtenerNumeroUsuario();
    verificarAdivinanza(numeroSecreto, numeroAdivinado);
  }
  
};

juegoAdivinanza();
