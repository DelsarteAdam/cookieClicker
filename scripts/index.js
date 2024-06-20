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


cookie.addEventListener("click", () => {
  totalScoreHtml.innerHTML = totalScore;
});

/*
LES ETAPES DU PROJET

ETAPE 1 : Quand on clique sur "cookie" :
  comportement score ==> totalScore = score++;

ETAPE 2 : Quand score atteint :
  - Palier 1 : coutBouton1 (default = 100 points)
    comportement bouton bonus1 ==> si (totalScore >= 100) ==> attribut = enabled
      Si je clique sur le bouton bonus1
        comportement score ==> totalScore = totalScore - coutBouton1
        comportement coutBouton1 = coutBouton1 + 10%
        comportement bouton bonus1 = disabled
        comportement multiplicateur = multiplicateur *2 ;
        comportement click = score * multiplicateur ;
          Concrêtement : chaque click devient +2;
  - Palier 2 : coutBouton2 (default = 1000 points)
    comportement bouton bonus 2 ==> si (totalScore >= 1000) ==> attribut = enabled
      Si je clique sur le bouton bonus2
        comportement score ==> totalScore = totalScore - coutBouton2
        comportement coutBouton2 = coutBouton2 + 10%
        comportement bouton bonus2 = disabled
        comportement général = function autoclic = 1 click (nrépétition 0pardefault) / seconde
          Concrètement, je clique 5 fois par seconde, mais l'ordinateur me compte un 6ème click ==> après 10 secondes, j'ai 50 clicks + 10 = 60 clicks
  



*/