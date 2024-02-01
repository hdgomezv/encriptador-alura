function encriptar() {
  var mensajeEntrada = document.getElementById("caja-mensaje").value;
  var mensajeEncriptado = encriptarMensaje(mensajeEntrada);
  document.getElementById("caja-resultado").value = mensajeEncriptado;
}

function desencriptar() {
  var mensajeEncriptado = document.getElementById("caja-mensaje").value;
  var mensajeDesencriptado = desencriptarMensaje(mensajeEncriptado);
  document.getElementById("caja-resultado").value = mensajeDesencriptado;
}

function encriptarMensaje(mensaje) {
  return mensaje
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptarMensaje(mensajeEncriptado) {
  return mensajeEncriptado
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e")
    .replace(/ai/g, "a");
}

function actualizarResultado(contenido) {
  var cajaResultado = document.getElementById("caja-resultado");
  var contenidoInicial = document.getElementById("contenido-inicial");

  cajaResultado.value = contenido;

  // Oculta el contenido inicial cuando se muestra la respuesta
  contenidoInicial.style.display = "none";
  // Muestra el cuadro de resultado
  cajaResultado.style.display = "block";
}
