// Estados y capitales

alert("Hola! Un placer tenerte de vuelta, dejame dejarte una actividad");
let estado = prompt(
  "Ingrese un estado de Venezuela, y yo te dire la capital del estado que escojas :)"
);

switch (estado) {
  case "Falcon":
    alert("La capital de este estado es Coro");
    break;

  case "Merida":
    alert("La capital de este estado es Merida");
    break;

  case "Zulia":
    alert("La capital de este estado es Maracaibo");
    break;

  case "Lara":
    alert("La capital de este estado es Barquisimeto");
    break;

  case "Vargas":
    alert("La capital de este estado es Vargas");
    break;

  default:
    alert(
      "El estado que colocaste no pudo ser encontrado, por favor intente nuevamente... Recordando que la primera letra tiene que ser mayuscula! :)"
    );
    break;
}
