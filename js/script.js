const digitar = document.getElementById("digitar");
const texto = "eveloper Front-End.";
const letras = texto.split("");
let i = 0;
let apagando = false;

function escrever() {
  if (!apagando) {
    digitar.innerHTML += letras[i];
    i++;
    if (i === letras.length) {
      apagando = true;
      setTimeout(apagar, 2000);
    }
  }
}

function apagar() {
  if (apagando && i >= 0) {
    digitar.innerHTML = texto.substring(0, i);
    i--;
    if (i < 0) {
      apagando = false;
      i = 0;
      setTimeout(escrever, 100);
    } else {
      setTimeout(apagar, 100);
    }
  }
}

setInterval(escrever, 150);

