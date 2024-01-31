function encriptar() {
  var inputText = document.getElementById("mensaje-box").value;
  var encryptedText = inputText
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.getElementById("mensaje-resultado-box").value = encryptedText;
}

function desencriptar() {
  var encryptedText = document.getElementById("mensaje-box").value;
  var originalText = encryptedText
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e")
    .replace(/ai/g, "a");
  document.getElementById("mensaje-resultado-box").value = originalText;
}
