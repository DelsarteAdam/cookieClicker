let totalScore = 0;
let totalScoreHtml = document.getElementById("score");

let totalMultiplicateur = 1;
let totalMultiplicateurHtml = document.getElementById("multiplicateur");

let cookieClick = document.getElementById("cookie");

let mutliplicatorBonus = document.getElementById("bonus1");
let bonus2 = document.getElementById("bonus2");
let bonus3 = document.getElementById("bonus3");
let bonus4 = document.getElementById("bonus4");

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
  udpateScoreDisplay();
  blockBonusPurchase();
}

function udpateScoreDisplay (){
  totalScoreHtml.innerText = `${totalScore}`;
}

function addMultiplicator () {
  totalMultiplicateur += 1;
  totalScore -= bonus1Cost;
  bonus1Cost += 10;
  udpateScoreDisplay();
  udpateMultiplicatorDisplay();
  blockBonusPurchase();
}

  function blockBonusPurchase()  {
    if (totalScore < bonus1Cost) {
      mutliplicatorBonus.disabled = true;
    } else {
      mutliplicatorBonus.disabled = false;
    }
  }


function udpateMultiplicatorDisplay() {
  totalMultiplicateurHtml.innerText = `x${totalMultiplicateur}`;
}

//auto clicker function
function autoClicker() {
  totalScore += autoClickNumber * totalMultiplicateur;
}
//window.setInterval(auto, 1000);


blockBonusPurchase();
cookieClick.addEventListener("click", clickScore);
mutliplicatorBonus.addEventListener("click", addMultiplicator)
