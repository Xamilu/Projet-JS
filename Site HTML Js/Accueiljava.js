let title = ["Dark", "Black Mirror", "The Walking Dead", "Naruto"];
let season = [3, 5, 9, 9];
let ageRestriction = [16, 16, 18, 13];
let release = [2020, 2019, 2018, 2006];

document.getElementById('serie1').innerHTML = title[0] + ' ' + season[0] + ' saisons ' + ageRestriction[0] + '+ ' + release[0];

document.getElementById('serie2').innerHTML = title[1] + ' ' + season[1] + ' saisons ' + ageRestriction[1] + '+ ' + release[1];

document.getElementById('serie3').innerHTML = title[2] + ' ' + season[2] + ' saisons ' + ageRestriction[2] + '+ ' + release[2];

document.getElementById('serie4').innerHTML = title[3] + ' ' + season[3] + ' saisons ' + ageRestriction[3] + '+ ' + release[3];


let film = ["8 mile", "Bird Box", "Les Dents de la Mer", "American Nightmare"];
let duration = [70, 124, 124, 85];
let ageRestriction2 = [16, 16, 16, 16];
let release2 = [2002, 2018, 1974, 2013];

document.getElementById('film1').innerHTML = film[0] + ' ' + duration[0] + ' minutes ' + ageRestriction2[0] + '+ ' + release2[0];

document.getElementById('film2').innerHTML = film[1] + ' ' + duration[1] + ' minutes ' + ageRestriction2[1] + '+ ' + release2[1];

document.getElementById('film3').innerHTML = film[2] + ' ' + duration[2] + ' minutes ' + ageRestriction2[2] + '+ ' + release2[2];

document.getElementById('film4').innerHTML = film[3] + ' ' + duration[3] + ' minutes ' + ageRestriction2[3] + '+ ' + release2[3];



let perso = ["8 mile", "American Nightmare", "Black Mirror", "Naruto"];
let duration2 = [70, 85];
let season2 = [5, 9];
let ageRestriction3 = [16, 16, 16, 13];
let release3 = [2002, 2013, 2019, 2006];

document.getElementById('perso1').innerHTML = perso[0] + ' ' + duration2[0] + ' minutes ' + ageRestriction3[0] + '+ ' + release3[0];

document.getElementById('perso2').innerHTML = perso[1] + ' ' + duration2[1] + ' minutes ' + ageRestriction3[1] + '+ ' + release3[1];

document.getElementById('perso3').innerHTML = perso[2] + ' ' + season2[0] + ' saisons ' + ageRestriction3[2] + '+ ' + release3[2];

document.getElementById('perso4').innerHTML = perso[3] + ' ' + season2[1] + ' saisons ' + ageRestriction3[3] + '+ ' + release3[3];






let pseudoUser = localStorage.getItem("Pseudoprofil");

document.getElementById("pseudoUtilisateur").innerHTML = pseudoUser;
