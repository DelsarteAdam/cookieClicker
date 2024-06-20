let totalScore = 0;
let totalScoreHtml = document.getElementById("score");


let totalMultiplicateur = 1;
let totalMultiplicateurHtml = document.getElementById("multiplicateurText");

let cookieClick = document.getElementById("cookie");

let bonus1 = document.getElementById("bonus1"); //OK
let bonus2 = document.getElementById("bonus2"); //OK
let bonus3 = document.getElementById("bonus3");
let bonus4 = document.getElementById("bonus4");

let bonus1Multiplicator = 2;
let bonus2Multiplicator = 3;
let bonus3Multiplicator = 4;
let bonus4Multiplicator = 5;

let bonus1CostElement = document.getElementById("valeurCoutBonus1");
let bonus1Cost = 10;
let bonus1Increment = 5;
bonus1CostElement.innerHTML = bonus1Cost;

let bonus2CostElement = document.getElementById("valeurCoutBonus2");
let bonus2Cost = 25;
bonus2CostElement.innerHTML = bonus2Cost;

// let bonus3Cost = 1000;
// let bonus4Cost = 10000;
console.log(bonus1Cost);
let newBonus1cost = bonus1Cost + (bonus1Cost / 100 * 10);


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

cookieClick.addEventListener("click", clickScore);




cookie.addEventListener("click", () => {
  totalScoreHtml.innerHTML = totalScore;

  if (totalScore >= 10000){
    bonus4.disabled = false;
  } else if (totalScore >= 1000) {
    bonus3.disabled = false;
  } else if (totalScore >= bonus2Cost) {
    bonus2.disabled = false;
  } else if (totalScore >= bonus1Cost) {
    bonus1.disabled = false;
  } else {
    bonus1.disabled = true;
  }
});

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
  bonus2Cost += 25;
    bonus2CostElement.innerHTML = bonus2Cost;
  if (totalScore < bonus2Cost){
    bonus2.disabled = true;
  }

})





  // totalMultiplicateurHtml = document.getElementById("multiplicateur");
  //  totalMultiplicateurHtml.innerHTML = totalMultiplicateur;
  //  totalScore = calculerNewScore(bonus1Cost); 
  // totalScoreHtml.innerHTML = totalScore;