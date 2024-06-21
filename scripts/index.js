let totalScore = 0;
let totalScoreHtml = document.getElementById("score");
let countdown = 5;
let interval;
let timerElement = document.getElementById("timer");

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
let bonus3Cost = 1000;
let bonus3Increment = 500;
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

// add score on cookie click

function clickScore() {
  totalScore += 1 * totalMultiplicateur;
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

function updateTimerDisplay(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;
  timerElement.innerText = 
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startCoundown(){
  if (interval){
    clearInterval(interval);
  }
  timerElement.style.display = 'block';
  countdown = 5;
  updateTimerDisplay(countdown);
  interval = setInterval(function() {
    countdown--;
    updateTimerDisplay(countdown);
    applyFunction();
    if (countdown <=0 ) {
      clearInterval(interval);
      totalMultiplicateur = totalMultiplicateur / 2;
      totalMultiplicateurHtml.innerHTML = totalMultiplicateur;
      timerElement.style.display = "none";
      }
  }, 1000);
}



cookieClick.addEventListener("click", clickScore);


// cookie.addEventListener("click", () => 

  function checkScore() {
  totalScoreHtml.innerHTML = totalScore;

  if (totalScore >= bonus4Cost){
    bonus4.disabled = false;
  } else if (totalScore >= bonus3Cost) {
    bonus3.disabled = false;
  } else if (totalScore >= bonus2Cost) {
    bonus2.disabled = false;
  } else if (totalScore >= bonus1Cost) {
    bonus1.disabled = false;
  } 
};

window.setInterval(checkScore, 10);


bonus1.addEventListener("click", () => {
  totalMultiplicateur++;
    totalMultiplicateurHtml.innerHTML = totalMultiplicateur;
  totalScore = totalScore - bonus1Cost;
    totalScoreHtml.innerHTML = totalScore;
  bonus1Cost += bonus1Increment;
    bonus1CostElement.innerHTML = bonus1Cost;
    bonus1Increment +=10;
  if (totalScore < bonus1Cost) {
    bonus1.disabled = true;
  } 
    })


bonus2.addEventListener("click", () =>{
  autoClickNumber++;
    setInterval(autoClicker, 1000);
  totalScore = totalScore - bonus2Cost;
  bonus2Cost += bonus2Increment;
    bonus2CostElement.innerHTML = bonus2Cost;
    bonus2Increment +=25;
  if (totalScore < bonus2Cost){
    bonus2.disabled = true;
  }
})

bonus3.addEventListener("click", () => {
  startCoundown();
  totalMultiplicateur = totalMultiplicateur*2;
  totalMultiplicateurHtml.innerHTML = totalMultiplicateur;
  
  totalScore = totalScore - bonus3Cost;
  bonus3Cost += bonus3Increment;
    bonus3CostElement.innerHTML = bonus3Cost;
    bonus3Increment +=250;

  if (totalScore < bonus3Cost){
    bonus3.disabled = true;
  }
})


