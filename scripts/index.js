let totalScore = 0;
let totalScoreHtml = document.getElementById("score");

let totalMultiplicateur = 1;
let totalMultiplicateurHtml = document.getElementById("multiplicateur");



let cookieClick = document.getElementById("cookie");
let bonusDisplay = document.getElementById("bonus");

let bonusTimer = 30;
let bonusTimerHtml = document.getElementById("timer");

let bonusState = "désactivé";
let bonusStateHtml = document.getElementById("bonus-3-state");
bonusStateHtml.innerHTML = bonusState;

let mutliplicatorBonus = document.getElementById("bonus1");
let autoClickBonus = document.getElementById("bonus2");
let bonus200Pourcents = document.getElementById("bonus3");

let bonus1Cost = 10;
let bonus2Cost = 100;
let bonus3Cost = 10;

let bonus1Number = 0;
let bonus2Number = 0;
let bonus3Number = 0;

let autoClickNumber = 0;
let is200PercentBonusActive = false;

// add score on cookie click

function clickScore() {
  if (is200PercentBonusActive === false) {
    totalScore += 1 * totalMultiplicateur;
  } else {
    totalScore += 2 * totalMultiplicateur;
  }
  udpateScoreDisplay();
  blockBonusPurchase();
}

function udpateScoreDisplay() {
  totalScoreHtml.innerText = `${totalScore}`;
}

function addMultiplicator() {
  totalMultiplicateur += 1;
  totalScore -= bonus1Cost;
  bonus1Cost += 10;
  udpateScoreDisplay();
  udpateMultiplicatorDisplay();
  blockBonusPurchase();
  updateCostDisplay();
}

function blockBonusPurchase() {
  mutliplicatorBonus.disabled = totalScore < bonus1Cost;
  autoClickBonus.disabled = totalScore < bonus2Cost;
  bonus200Pourcents.disabled = is200PercentBonusActive || totalScore < bonus3Cost;
}

blockBonusPurchase();

function udpateMultiplicatorDisplay() {
  totalMultiplicateurHtml.innerText = `x${totalMultiplicateur}`;
}

//auto clicker function

function addAutoClicker() {
  autoClickNumber += 1;
  totalScore -= bonus2Cost;
  bonus2Cost += 100;
  udpateScoreDisplay();
  blockBonusPurchase();
  updateCostDisplay();
  if (autoClickNumber === 1) {
    startAutoClicker(cookieClick, 1000);
  }
}

function simulateClick(element) {
  var event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
}

function startAutoClicker(element, interval) {
  setInterval(function () {
    for (let i = 0; i < autoClickNumber; i++) {
      simulateClick(element);
    }
  }, interval);
}

// Bonus 200%

function activate200PercentBonus() {
  if (totalScore >= bonus3Cost && !is200PercentBonusActive) {
    is200PercentBonusActive = true;
    totalScore -= bonus3Cost;
    udpateScoreDisplay();
    updateCostDisplay();
    blockBonusPurchase();
    reduceTimer();
    udpateTimer();
    bonusTimerHtml.innerText = bonusTimer;
    bonusStateHtml.innerHTML = "activé";
    // Désactiver le bonus après 30 secondes
    setTimeout(function () {
      is200PercentBonusActive = false;
    }, 30000);
  }
};

// Réduire le timer chaque seconde

function reduceTimer() {
  let timerInterval = setInterval(function () {
    bonusTimer -= 1;
    udpateTimer();
    if (bonusTimer === 0) {
      clearInterval(timerInterval); // Arrêter l'intervalle lorsque le temps est écoulé
      bonusTimerHtml.innerText = "30"; // Effacer le texte du timer
      bonusStateHtml.innerHTML = "désactivé";
    }
  }, 1000); // intervalle d'une seconde (1000 ms)
}

function udpateTimer() {
  bonusTimerHtml.innerHTML = bonusTimer;
}

function updateCostDisplay() {
  document.getElementById("bonus1CostDisplay").textContent = bonus1Cost;
  document.getElementById("bonus2CostDisplay").textContent = bonus2Cost;
  document.getElementById("bonus3CostDisplay").textContent = bonus3Cost;
}

cookieClick.addEventListener("click", clickScore);
mutliplicatorBonus.addEventListener("click", addMultiplicator);
autoClickBonus.addEventListener("click", function () {
  addAutoClicker();
});
bonus200Pourcents.addEventListener("click", function () {
  activate200PercentBonus();
});

updateCostDisplay();
udpateTimer();
