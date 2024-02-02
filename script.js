function validarCaja(entrada) {
  if (entrada === "") {
    alert("No se encontró ningun mensaje para proceder.");
  } else {
    return true;
  }
}

function validarCaracteresEspeciales(mensaje) {
  // Expresión regular que representa cualquier carácter que no sea alfabetico ni espacio en blanco.
  var caracteresEspeciales = /[^a-zA-Z\s]/;
  if (caracteresEspeciales.test(mensaje)) {
    // Se encontraron caracteres especiales, la frase no es válida.
    return false;
  } else {
    // No se encontraron caracteres especiales, la frase es válida.
    return true;
  }
}

function encriptar() {
  var mensajeEntrada = document.getElementById("caja-mensaje").value;
  if (validarCaja(mensajeEntrada)) {
    if (validarCaracteresEspeciales(mensajeEntrada)) {
      var mensajeVerificado = verificarTexto(mensajeEntrada);
      var mensajeEncriptado = encriptarMensaje(mensajeVerificado);
      document.getElementById("caja-resultado").value = mensajeEncriptado;
      actualizarResultado(mensajeEncriptado);
    } else {
      alert(
        "La frase contiene caracteres especiales. Por favor, utiliza solo letras minúsculas y sin acentos."
      );
    }
  }
}

function desencriptar() {
  var mensajeEncriptado = document.getElementById("caja-mensaje").value;
  if (validarCaja(mensajeEncriptado)) {
    if (validarCaracteresEspeciales(mensajeEncriptado)) {
      var mensajeVerificado = verificarTexto(mensajeEncriptado);
      var mensajeDesencriptado = desencriptarMensaje(mensajeVerificado);
      document.getElementById("caja-resultado").value = mensajeDesencriptado;
      actualizarResultado(mensajeDesencriptado);
    } else {
      alert(
        "La frase contiene caracteres especiales. Por favor, utiliza solo letras minúsculas y sin acentos."
      );
    }
  }
}

function verificarTexto(mensaje) {
  if (mensaje === mensaje.toLowerCase()) {
    return mensaje;
  } else {
    alert(
      "El texto debe  estar en letra minúscula... se procederá a cambiarlo"
    );
    return mensaje.toLowerCase();
  }
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
