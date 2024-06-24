<<<<<<< HEAD
///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////DECLARATION DES VARIABLES//////////////////////////////////
=======
import { duckParagraphs } from "./words.js";
>>>>>>> a3d23eec66dd2151ec24e9608f9148d564995bf9

let totalScore = 0;
let totalScoreHtml = document.getElementById("score");
let countdown = 15;
let interval;
let nombreAleatoire;
let timerBonus3Element = document.getElementById("timerBonus3");
let timerBonus4Element = document.getElementById("timerBonus4");
let totalMultiplicateur = 1;
<<<<<<< HEAD
let totalMultiplicateurHtml = document.getElementById("multiplicateurText");
let cookieClick = document.getElementById("cookie");

let bonus1 = document.getElementById("bonus1"); //OK
let bonus2 = document.getElementById("bonus2"); //OK
let bonus3 = document.getElementById("bonus3"); //OK
let bonus4 = document.getElementById("bonus4"); //OK
=======
let totalMultiplicateurBonus = 1;
let totalMultiplicateurHtml = document.getElementById("multiplicateurText");

let cookieClick = document.getElementById("cookie");

let bonus1 = document.getElementById("bonus1");
let bonus2 = document.getElementById("bonus2");
let bonus3 = document.getElementById("bonus3");
let bonus3Html = document.getElementById("bonus3Text");
let timerBonus3 = document.getElementById("timerBonus3");
>>>>>>> a3d23eec66dd2151ec24e9608f9148d564995bf9

let bonus1Multiplicator = 2;

let bonus1CostElement = document.getElementById("valeurCoutBonus1");
let bonus1Cost = 10;
let bonus1Increment = 5;
bonus1CostElement.innerHTML = bonus1Cost;

let bonus2CostElement = document.getElementById("valeurCoutBonus2");
let bonus2Cost = 100;
<<<<<<< HEAD
let bonus2Increment = 50;
bonus2CostElement.innerHTML = bonus2Cost;

let bonus3CostElement = document.getElementById("valeurCoutBonus3");
let bonus3Cost = 2500;
let bonus3Increment = 1000;
bonus3CostElement.innerHTML = bonus3Cost;

let bonus4CostElement = document.getElementById("valeurCoutBonus4");
let bonus4Cost = 10000;
let bonus4Increment = 5000;
bonus4CostElement.innerHTML = bonus4Cost;


=======
let bonus3Cost = 1000;
>>>>>>> a3d23eec66dd2151ec24e9608f9148d564995bf9

let arrBonus = [bonus1, bonus2, bonus3];
let arrBonusCost = [bonus1Cost, bonus2Cost, bonus3Cost];

let autoClickNumber = 0;

<<<<<<< HEAD
=======
let time200Bonus = 0;
let time200BonusCheck = false;

let randomTextHtml = document.getElementById("randomText");
>>>>>>> a3d23eec66dd2151ec24e9608f9148d564995bf9

///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// FONCTIONS /////////////////////////////////////////

<<<<<<< HEAD
=======
//update score

function updateScore() {
  totalScoreHtml.innerHTML = totalScore;
}
//update multiplicatorscore

function updateMultiplicatorScore() {
  totalMultiplicateurHtml.innerHTML = totalMultiplicateurBonus;
}
>>>>>>> a3d23eec66dd2151ec24e9608f9148d564995bf9

// add score on cookie click

function clickScore() {
<<<<<<< HEAD
  totalScore += 1 * totalMultiplicateur;
  totalScoreHtml.innerHTML = totalScore;
=======
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
>>>>>>> a3d23eec66dd2151ec24e9608f9148d564995bf9
}

//auto clicker function
function autoClicker() {
<<<<<<< HEAD
  totalScore += autoClickNumber * 1;
  totalScoreHtml.innerHTML = totalScore;
=======
  totalScore += autoClickNumber * totalMultiplicateurBonus;
>>>>>>> a3d23eec66dd2151ec24e9608f9148d564995bf9
}

<<<<<<< HEAD
function applyFunction(){
  console.log ("une seconde de moins");
}

// MISE A JOUR DE L AFFICHAGE DU TIMER

function updateTimerBonus3Display(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;
  timerBonus3Element.innerText = 
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimerBonus4Display(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;
  timerBonus4Element.innerText = 
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

//GENERER UN NOMBRE ALEATOIRE

function genererNombreAleatoire (){
  return Math.floor(Math.random() * 200) + 1;
}


//AJOUTER UN COMPTE A REBOURS

function startCoundownBonus3(){
  if (interval){
    clearInterval(interval);
  }
  timerBonus3Element.style.display = 'block';
  countdown = 15;
  updateTimerBonus3Display(countdown);
  interval = setInterval(function() {
    countdown--;
    updateTimerBonus3Display(countdown);
    applyFunction();
    if (countdown <=0 ) {
      clearInterval(interval);
      totalMultiplicateur = totalMultiplicateur / 2;
      totalMultiplicateurHtml.innerHTML = totalMultiplicateur;
      timerBonus3Element.style.display = "none";
      }
  }, 1000);
}


function startCoundownBonus4(){
  if (interval){
    clearInterval(interval);
  }
  timerBonus4Element.style.display = 'block';
  countdown = 15;
  updateTimerBonus4Display(countdown);
  interval = setInterval(function() {
    countdown--;
    updateTimerBonus4Display(countdown);
    applyFunction();
    if (countdown <=0 ) {
      clearInterval(interval);
      
      totalMultiplicateur = totalMultiplicateur * 1;
      totalMultiplicateurHtml.innerHTML = totalMultiplicateur;
      timerBonus4Element.style.display = "none";
      }
  }, 1000);
}


cookieClick.addEventListener("click", clickScore);


///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// LE JEU ///////////////////////////////////////////

  function checkScore() {
  totalScoreHtml.innerHTML = totalScore;

  bonus1.disabled = totalScore < bonus1Cost;
  bonus2.disabled = totalScore < bonus2Cost;
  bonus3.disabled = totalScore < bonus3Cost;
  bonus4.disabled = totalScore < bonus4Cost;
 
};

window.setInterval(checkScore, 10);


bonus1.addEventListener("click", () => {
  totalMultiplicateur++;
  totalMultiplicateurHtml.innerHTML = totalMultiplicateur;
  totalScore -= bonus1Cost;
  totalScoreHtml.innerHTML = totalScore;
  bonus1Cost += bonus1Increment;
  bonus1CostElement.innerHTML = bonus1Cost;
  bonus1Increment +=10;
    })


bonus2.addEventListener("click", () =>{
  autoClickNumber++;
  setInterval(autoClicker, 1000);
  totalScore -= bonus2Cost;
  bonus2Cost += bonus2Increment;
  bonus2CostElement.innerHTML = bonus2Cost;
  bonus2Increment +=25;
})

bonus3.addEventListener("click", () => {
  startCoundownBonus3();
  totalMultiplicateur *= 2;
  totalMultiplicateurHtml.innerHTML = totalMultiplicateur;
  totalScore -= bonus3Cost;
  bonus3Cost += bonus3Increment;
  bonus3CostElement.innerHTML = bonus3Cost;
  bonus3Increment +=500;
})

bonus4.addEventListener("click", () => {
  startCoundownBonus4();
  nombreAleatoire = genererNombreAleatoire();
  cookieClick.addEventListener("click", () =>{
  totalScore += nombreAleatoire;
  })
  totalScore -= bonus4Cost;
  bonus4Cost += bonus4Increment;
  bonus4CostElement.innerHTML = bonus4Cost;
  bonus4Increment +=500;

})
=======
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
  bonus1.innerHTML = `multiplicator +2 cost ${bonus1Cost}`;
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
    bonus3.style.backgroundColor = "#ac851a";
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
        bonus3.style.backgroundColor = "";
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
>>>>>>> a3d23eec66dd2151ec24e9608f9148d564995bf9
