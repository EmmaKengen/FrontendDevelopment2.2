/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*hamburger menu*/
/*https://codepen.io/shooft/pen/jOMOroZ*/
/*https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0*/

var buttonNav=document.querySelector("header button");
var contentNavigatie=document.querySelector("header nav");


function openMenu(){
    buttonNav.classList.toggle("verander");
    contentNavigatie.classList.toggle("anders");
}

buttonNav.addEventListener("click", openMenu);


/*Animatie lopen van de tekst aan de linkerkant van de pagina*/
/*https://www.codeblocq.com/2016/05/Two-Ways-of-Creating-an-Animation-Loop-in-JavaScript/*/
/*https://css-tricks.com/using-requestanimationframe/*/

/*Hoe werkt deze functie. We hebben twee constante waardes, de refreshRate en de maxYposition. De refreshrate is een waarde die aangeeft hoevaak de functie per seconde ververst en de maxYposition geeft aan hoeveel pixels de tekst maximaal mag verschuiven.
Daarnaast heb je 3 variable, een die de tekst aanroept in de html, een die de snelheid aangeeft waarin de tekst gaat verschuiven en een geeft aan waar de tekst start.*/
    const refreshRate=1000/60;
    const maxYposition=400;
    var text = document.querySelector("main div p");
    var speedY = 1;
    var positionY=0;

/*Vervolgens maak je een functie aan, ik heb deze textLoop genoemd. In de functie wordt gezegt: positionY is gelijk aan (positionY + speedY. Het aantal zal steeds hoger worden naarmate de tijd. Dus zodra positionY groter wordt dan de maxYposition of kleiner dan 0, dan begint het proces eigenlijk omnieuw maar de andere kant op. Met de text.style.top wordt gemeten hoever de loop is. Uiteindelijk wordt de functie aangeroepen als een animationFrame.*/
function textLoop(){
    positionY = positionY + speedY;
    if (positionY > maxYposition || positionY <0){
        speedY= speedY * (-1);
    }
    text.style.top=positionY + 'px';
    window.requestAnimationFrame(textLoop);
}

window.requestAnimationFrame(textLoop);
