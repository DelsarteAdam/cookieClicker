# Cookie Clicker - Le "GOTY" <img src="./pictures/cookie_image.png" alt="Cookie Clicker" height="25" width="25">

## Qu'est ce que Cookie Clicker &#x1F914; ?

Cookie clicker est un jeu réalisé par [Steven](https://github.com/stevenmottiaux), [Adam](https://github.com/DelsarteAdam) et [Cédric](https://github.com/Ceeeed1985). Le principe est simple, cliquer sur l'image de "Cookie" pour gagner des points. Ces points sont cumulables et permettent d'acheter des bonus. Une fois un bonus acheté, il est automatiquement activé et son coût est déduit du score total.

Il n'y a pas de limite de partie, le jeu peut être continué indéfiniment.

## Pourquoi ce projet &#x1F50D; ?

Ce projet a été réalisé dans le cadre de la formation de développeur web et d'application mobile avec [BeCode](https://becode.org/). Ce projet peut-être divisé en 3 grandes parties :

- La partie "Back-end" qui consiste à réaliser les différentes automatisations liées au jeu (principalement Javascript).
- La partie "Front-end" qui consiste à réaliser la partie visible du projet en version desktop et mobile (principalement HTML, CSS et Javascript).
- La partie "Project Management" qui consiste à réaliser le planning et la gestion du projet.

Ce jeu permet de se défouler un bon coup après une journée chargée de travail &#x1F601; ...

## Quels sont les bonus disponibles &#x2139; ?

Dans Cookie Clicker, il y a 3 types de bonus disponibles :

- Les "Auto-clickers" &#x261D;: ce bonus permet d'automatiquement cliquer sur le cookie toutes les secondes.
- Les "Multiplicateurs" &#x2716;: ce bonus permet de multiplier le nombre de points gagnés par clic.
- Les "Bonus 200%" &#x23F1;: ce bonus permet de multiplier par 2 le nombre de points gagnés par clic et ceci pendant 30 secondes. Quand le timer (affiché dans le bouton du bonus) arrive à 0, le bonus est automatiquement désactivé.

## Description technique du site

Le site est réalisé en HTML, CSS et Javascript. Le backend est réalisé en Javascript. Les différentes fonctions Javascript sont dans le fichier `scripts/index.js`. Elles permettent en résumé de gérer les différents bonus et le score. Elles permettent également d'activer certains bonus en fonction du score actuel.

Voici l'arbologie des fichiers et dossiers du site :

```
CookieClicker/
├── index.html
├── styles/
│   ├── styles.css
│   ├── reset.css
├── scripts/
│   ├── index.js
├── pictures/
│   ├── cookie_image.png
├── README.md
```

## Demo du jeu (version mobile) &#x1F4F1;

Voici une courte vidéo qui représente le fonctionnement du jeu :

![video](https://cdn.discordapp.com/attachments/1253244407587803187/1255073728702840862/demo.webm?ex=667bcdff&is=667a7c7f&hm=f168872b22ccc2b94669b71ce9af282c48c5e37502c763c9c75329bfdecfa1ee&)

## Lien vers le jeu &#x1F517;.

Vous retrouverez le lien vers le jeu sur le site [Cookie Clicker](https://delsarteadam.github.io/CookieClicker/).

## A faire &#x1F4AD;

- Nous aimerions encore mettre en place un bonus qui peut devenir un malus selon la **_"chance"_** du joueur. Certains malus pourraientt être une perte de points ou une remise à 0 des points.
- Nous aimerions mettre en place un système de sauvegarde de la partie.
- ...
