// creation des élements
let div = document.createElement("div")
let div1 = document.createElement("div")
let h1 = document.createElement("h1");
let p = document.createElement("p");
let p2 = document.createElement("p");
let input = document.createElement("input");
let btn = document.createElement("button");
let p3 = document.createElement("p");
let h2 = document.createElement("h2");
// selectionner les elementes + ajout d'un attribut
div.setAttribute("class","mh100 mt250 container p-5 w-50 d-flex")
div1.setAttribute("class"," row col-md-12 d-flex justify-content-center")
btn.setAttribute("id", "click");
h2.setAttribute("id", "timer");
input.setAttribute("id","input");
input.setAttribute("type","number")
// btn.setAttribute("class", "jeannne")

// plus et moins
const plus = function (numJoueur) {
  p3.innerHTML = `${numJoueur} c'est plus !`;
};
const moins = function (numJoueur) {
  p3.innerHTML = `${numJoueur} c'est moins !`;
};

// sortie des elements dans le html
h1.innerHTML = "Guess Members";
p.innerHTML = "C'est le jeu du c'est plus c'est moins !!! A vous de jouer !! ";
p2.innerHTML = " Le nombres est entre 0 et 10 000.";
input.innerHTML = "";
btn.innerHTML = "Envoyer";
h2.innerHTML = "Go !";

// Variable body = document.body
let body = document.body;

// Gestion des Enfants par rapport au Body
body.appendChild(div)
div.appendChild(div1)
div1.appendChild(h1);
div1.appendChild(p);
div1.appendChild(p2);
div1.appendChild(input);
div1.appendChild(btn);
div1.appendChild(p3);
div1.appendChild(h2);

// timer
const departMinutes = 1.5;
let temps = departMinutes * 60;
let checktime = false;

const timerElement = document.getElementById("timer");
function startTimer (){

  
  setInterval(() => {
    if (temps === 0 && checktime == false) {
    checktime = true;
    alert("perdu");
    location.reload();
  } else if (temps !== 0) {
    temps = temps <= 0 ? 0 : temps - 1;
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);
    
    // console.log("min", minutes, "se", secondes);
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    
    timerElement.innerText = `${minutes}:${secondes}`;
    console.log(temps);
  }
}, 1000);
}
// génèrer un chiffre aléatoire
function getRandom(max) {
  return Math.round(Math.random() * max);
}
let output = getRandom(10000);
// console.log("chiffre aleatoire " + output);
let minutes = parseInt(temps / 60, 10);
let secondes = parseInt(temps % 60, 10);
let started = false
// Recuperer la valeur dans l'input lors du click btn
document.getElementById("click").onclick = function () {
  outputNumbers();
};

document.getElementById("input")
    .addEventListener("keydown", function(e) {
      console.log("ff");
        if (e.keyCode === 13) {
            document.getElementById("click").click();
        }
        
    }); 
    console.log("click");
function outputNumbers() {
  let numJoueur = input.value;





// focus de mon input
document.getElementById('input').focus();


  console.log(numJoueur);
  // document.getElementById("click").innerHTML = "test"
  if (numJoueur < 0 || numJoueur > 10000) {
    alert("la valeur est superieur ou inferieur au règles du jeu ");
  }else{
    checkNumber(numJoueur);
    
    console.log('check',started);
    if(started === false){
      started = true
      startTimer()
    }
  }
}

function checkNumber(numJoueur) {
  // console.log("moi : " + numJoueur);
  //   console.log("ordi : " + output);

  if (numJoueur < output) {
    plus(numJoueur);
  } else if (numJoueur > output) {
    moins(numJoueur);
  } else {
    alert("Vous avez gagné !! bravo");
    location.reload();
  }
}

