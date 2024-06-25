import { duckParagraphs } from "./words.js";

let totalScore = 0;
let totalScoreHtml = document.getElementById("score");

let totalMultiplicateur = 1;
let totalMultiplicateurBonus = 1;
let totalMultiplicateurHtml = document.getElementById("multiplicateurText");

let cookieClick = document.getElementById("cookie");

let bonus1 = document.getElementById("bonus1");
let bonus2 = document.getElementById("bonus2");
let bonus3 = document.getElementById("bonus3");
let bonus3Html = document.getElementById("bonus3Text");
let timerBonus3 = document.getElementById("timerBonus3");

let bonus1Multiplicator = 1;

let bonus1Cost = 10;
let bonus2Cost = 100;
let bonus3Cost = 1000;

let arrBonus = [bonus1, bonus2, bonus3];
let arrBonusCost = [bonus1Cost, bonus2Cost, bonus3Cost];

let autoClickNumber = 0;

let time200Bonus = 0;
let time200BonusCheck = false;

let randomTextHtml = document.getElementById("randomText");

///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// FONCTIONS /////////////////////////////////////////

//update score

function updateScore() {
  totalScoreHtml.innerHTML = totalScore;
}
//update multiplicatorscore

function updateMultiplicatorScore() {
  totalMultiplicateurHtml.innerHTML = totalMultiplicateurBonus;
}

// add score on cookie click

function clickScore() {
  var scoreClick = 1 * totalMultiplicateurBonus;
  totalScore += 1 * totalMultiplicateurBonus;
  displayClickValue(scoreClick);
}

//click display

function displayClickValue(value) {
  const cookieDisplay = document.getElementById("cookie-display");
  const clickValueDisplay = document.createElement("div");
  clickValueDisplay.textContent = `+${value}`;
  clickValueDisplay.style.position = "absolute";
  const containerWidth = cookieDisplay.offsetWidth;
  const containerHeight = cookieDisplay.offsetHeight;

  // Position aléatoire en largeur et hauteur, en tenant compte des dimensions du conteneur
  clickValueDisplay.style.left = `${Math.random() * (containerWidth - 20)}px`; // 20px moins pour éviter tout débordement
  clickValueDisplay.style.top = `${Math.random() * (containerHeight - 20)}px`; // 20px moins pour éviter tout débordement

  clickValueDisplay.style.color = "white"; // Couleur du texte
  clickValueDisplay.style.fontSize = "20px"; // Taille du texte
  cookieDisplay.appendChild(clickValueDisplay);
  setTimeout(() => clickValueDisplay.remove(), 1000); // Supprimer l'élément après 1 seconde
}

//auto clicker function
function autoClicker() {
  totalScore += autoClickNumber * totalMultiplicateurBonus;
}

//check able to buy

function ableToBuy() {
  for (let i = 0; i < arrBonus.length; i++) {
    if (arrBonusCost[i] > totalScore) {
      arrBonus[i].disabled = true;
    } else {
      arrBonus[i].disabled = false;
    }
  }
}

//bonus1

//update text cost bonus1:

function bonus1UpdateText() {
  bonus1.innerHTML = `multiplicator +1 cost ${bonus1Cost}`;
}

function bonus1Action() {
  totalMultiplicateur += bonus1Multiplicator;
  totalScore -= bonus1Cost;
  bonus1Cost *= 1.25;
  bonus1Cost = Math.floor(bonus1Cost);
  arrBonusCost[0] = bonus1Cost;
  bonus1UpdateText();

  updateMultiplicatorScore();
}

//bonus2 autoclicker

function bonus2UpdateText() {
  bonus2.innerHTML = `autoclicker +${autoClickNumber} cost ${bonus2Cost}`;
}

function bonus2Action() {
  autoClickNumber++;
  totalScore -= bonus2Cost;
  bonus2Cost *= 1.25;
  bonus2Cost = Math.floor(bonus2Cost);
  arrBonusCost[1] = bonus2Cost;
  bonus2UpdateText();
}

//bonus 200%

function ActionMultiplicator() {
  if (time200BonusCheck === true) {
    totalMultiplicateurBonus = totalMultiplicateur * 2;
    updateBonusHtml(2);
  } else {
    totalMultiplicateurBonus = totalMultiplicateur;
    updateBonusHtml(1);
  }
}

function updateTimerBonus3Display() {
  let hours = Math.floor(time200Bonus / 3600);
  let minutes = Math.floor((time200Bonus % 3600) / 60);
  let secs = time200Bonus % 60;
  timerBonus3.innerHTML = `time left ${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function bonus3UpdateText() {
  bonus3Html.innerHTML = `bonus 200%  cost ${bonus3Cost}`;
}

function bonus3Action() {
  if (time200BonusCheck === false) {
    // bonus3.style.backgroundColor = "#ac851a";
    time200BonusCheck = true;
    totalScore -= bonus3Cost;
    bonus3Cost *= 1.25;
    bonus3Cost = Math.floor(bonus3Cost);
    arrBonusCost[2] = bonus3Cost;
    time200Bonus += 30;
    updateMultiplicatorScore();
    const bonusTimer = setInterval(function () {
      time200Bonus--;
      updateTimerBonus3Display();
      bonus3UpdateText();
      if (time200Bonus === 0) {
        bonus3UpdateText();
        timerBonus3.innerHTML = "30 sec Time";
        time200BonusCheck = false;
        // bonus3.style.backgroundColor = "";
        updateMultiplicatorScore();
        clearInterval(bonusTimer);
      }
    }, 1000);
  }
}

//all multi update

function allMultiUpdate() {
  ActionMultiplicator();
  updateMultiplicatorScore();
}

//bonus bonus

function updateBonusHtml(numbers) {
  document.getElementById("bonusMultiplator").innerHTML = `BONUS X ${numbers}`;
}

// random text

function randomText() {
  var randomTemp = Math.floor(Math.random() * 97);
  randomTextHtml.innerHTML = duckParagraphs[randomTemp];
}

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// LE JEU ///////////////////////////////////////////

window.setInterval(ableToBuy, 10);
cookieClick.addEventListener("click", clickScore);
bonus1.addEventListener("click", bonus1Action);
//auto clicker
bonus2.addEventListener("click", bonus2Action);
window.setInterval(autoClicker, 1000);
//bonus 200%
bonus3.addEventListener("click", bonus3Action);
//update score on interval
window.setInterval(updateScore, 10);
//update multiplicator
window.setInterval(allMultiUpdate, 10);
//random text
randomText();
window.setInterval(randomText, 10000);
//text update
bonus1UpdateText();
bonus2UpdateText();
bonus3UpdateText();

///////////////////////////////////////// extra code
