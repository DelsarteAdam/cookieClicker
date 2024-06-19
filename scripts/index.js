let totalScore = 0;
let totalScoreHtml = document.getElementById("score");

let totalMultiplicateur = 1;
let totalMultiplicateurHtml = document.getElementById("multiplicateur");

let cookieClick = document.getElementById("cookie");

let bonus1 = document.getElementById("bonus1");
let bonus2 = document.getElementById("bonus2");
let bonus3 = document.getElementById("bonus3");
let bonus4 = document.getElementById("bonus4");

let bonus1Multiplicator = 2;
let bonus2Multiplicator = 3;
let bonus3Multiplicator = 4;
let bonus4Multiplicator = 5;

let bonus1Cost = 10;
let bonus2Cost = 100;
let bonus3Cost = 1000;
let bonus4Cost = 10000;

let bonus1Number = 0;
let bonus2Number = 0;
let bonus3Number = 0;
let bonus4Number = 0;

let autoClickNumber = 0;

// add score on cookie click

function clickScore() {
  totalScore += 1 * totalMultiplicateur;
}

//auto clicker function
function autoClicker() {
  totalScore += autoClickNumber * totalMultiplicateur;
}
//window.setInterval(auto, 1000);

cookieClick.addEventListener("click", clickScore);
