///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////DECLARATION DES VARIABLES//////////////////////////////////

let totalScore = 0;
let totalScoreHtml = document.getElementById("score");
let countdown = 15;
let interval;
let nombreAleatoire;
let timerBonus3Element = document.getElementById("timerBonus3");
let timerBonus4Element = document.getElementById("timerBonus4");
let totalMultiplicateur = 1;
let totalMultiplicateurHtml = document.getElementById("multiplicateurText");
let cookieClick = document.getElementById("cookie");

let bonus1 = document.getElementById("bonus1"); //OK
let bonus2 = document.getElementById("bonus2"); //OK
let bonus3 = document.getElementById("bonus3"); //OK
let bonus4 = document.getElementById("bonus4"); //OK

let bonus1Multiplicator = 2;
let bonus2Multiplicator = 3;
let bonus3Multiplicator = 4;
let bonus4Multiplicator = 5;

let bonus1CostElement = document.getElementById("valeurCoutBonus1");
let bonus1Cost = 10;
let bonus1Increment = 5;
bonus1CostElement.innerHTML = bonus1Cost;

let bonus2CostElement = document.getElementById("valeurCoutBonus2");
let bonus2Cost = 100;
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



let bonus1Number = 0;
let bonus2Number = 0;
let bonus3Number = 0;
let bonus4Number = 0;

let autoClickNumber = 0;


///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// FONCTIONS /////////////////////////////////////////


// add score on cookie click

function clickScore() {
  totalScore += 1 * totalMultiplicateur;
  totalScoreHtml.innerHTML = totalScore;
}

//auto clicker function
function autoClicker() {
  totalScore += autoClickNumber * 1;
  totalScoreHtml.innerHTML = totalScore;
}
//window.setInterval(auto, 1000);

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
