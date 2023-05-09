const digitar = document.getElementById("digitar");
const texto = "eveloper Front-End.";
const letras = texto.split("");
const barra = document.getElementById("barra");
barra.classList.add('piscar');
let i = 0;
let apagando = false;

function escrever() {
  if (!apagando) {
    digitar.innerHTML += letras[i];
    i++;
    if (i === letras.length) {
      apagando = true;
      barra.classList.add('piscar');
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
      barra.classList.remove('piscar');
      setTimeout(escrever, 100);
    } else {
      setTimeout(apagar, 100);
    }
  }
}

setInterval(escrever, 150);

const emoji = document.getElementById("emoji");
let wave = false;

function acenar() {
  if (wave) {
    emoji.style.transform = "rotateY(180deg)";
    wave = false;
  } else {
    emoji.style.transform = "rotateY(0deg)";
    wave = true;
  }
}

setInterval(acenar, 500);

