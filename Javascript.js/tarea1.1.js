let nombre = prompt("Porfavor, ingrese su nombre");


const juegoEstados = () =>{
  let estado = prompt( nombre + " Ingrese un Estado de Venezuela para saber su capital!").toLowerCase();

  switch (estado) {
    case "falcon":
      alert("La capital de este estado es Coro");
      break;

    case "merida":
      alert("La capital de este estado es Merida");
      break;

    case "zulia":
      alert("La capital de este estado es Maracaibo");
      break;

    case "lara":
      alert("La capital de este estado es Barquisimeto");
      break;

    case "vargas":
      alert("La capital de este estado es Vargas");
      break;

    case "distrito capital":
        alert("La capital de este estado es Caracas");
        break;

    case "barinas":
        alert("La capital de este estado es Barinas");
        break;

    case "carabobo":
        alert("La capital de este estado es Valencia");
        break;

    default:
      alert("El estado " + estado + " no pudo ser encontrado, por favor intente nuevamente! :(");
      break;
  }
}
