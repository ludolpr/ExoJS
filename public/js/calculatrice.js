

// changer document et le mettre directement en body.appendChild ....
let body = document.body;

// creation des élements
let div = document.createElement("div")
let div2 = document.createElement("div")
let h1 = document.createElement("h1")
let input = document.createElement("input")
let table = document.createElement("table")

let button1 = document.createElement("button")
let button2 = document.createElement("button")
let button3 = document.createElement("button")
let button4 = document.createElement("button")
let button5 = document.createElement("button")
let button6 = document.createElement("button")
let button7 = document.createElement("button")
let button8 = document.createElement("button")
let button9 = document.createElement("button")
let button10 = document.createElement("button")
let button11 = document.createElement("button")
let button12 = document.createElement("button")
let button13 = document.createElement("button")
let button14 = document.createElement("button")
let button15 = document.createElement("button")
let button16 = document.createElement("button")
let button17 = document.createElement("button")

// for (let i = 0; i < 17; i++) {
//     let button + i = document.createElement("button")
// }    


let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");
let tr3 = document.createElement("tr");
let tr4 = document.createElement("tr");
let tr5 = document.createElement("tr");

let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
let td5 = document.createElement("td");
let td6 = document.createElement("td");
let td7 = document.createElement("td");
let td8 = document.createElement("td");
let td9 = document.createElement("td");
let td10 = document.createElement("td");
let td11 = document.createElement("td");
let td12 = document.createElement("td");
let td13 = document.createElement("td");
let td14 = document.createElement("td");
let td15 = document.createElement("td");
let td16 = document.createElement("td");
let td17 = document.createElement("td");
let td18 = document.createElement("td");

// selectionner les elements + ajout d'un attribut
div.setAttribute("class"," col-md-12 row m-0")
div2.setAttribute("class", "mh100 col-md-12 justyfy-content-center")

button1.setAttribute("class","btnCalc")
h1.setAttribute("class", "text-center")
input.setAttribute("placeholder", "Calcule")
table.setAttribute("border","1")

// les td options
td1.setAttribute("colspan","3")
input.setAttribute("id","output")

// bouton de la calculatrice !!
button1.setAttribute("onclick","effacer()")
button1.textContent="C"

button2.setAttribute("onclick","afficher('1')")
button2.textContent="1"
button3.setAttribute("onclick","afficher('2')")
button3.textContent="2"
button4.setAttribute("onclick","afficher('3')")
button4.textContent="3"
button5.setAttribute("onclick","afficher('+')")
button5.textContent="+"

button6.setAttribute("onclick","afficher('4')")
button6.textContent="4"
button7.setAttribute("onclick","afficher('5')")
button7.textContent="5"
button8.setAttribute("onclick","afficher('6')")
button8.textContent="6"
button9.setAttribute("onclick","afficher('-')")
button9.textContent="-"

button10.setAttribute("onclick","afficher('7')")
button10.textContent="7"
button11.setAttribute("onclick","afficher('8')")
button11.textContent="8"
button12.setAttribute("onclick","afficher('9')")
button12.textContent="9"
button13.setAttribute("onclick","afficher('*')")

button13.textContent="*"
button14.setAttribute("onclick","afficher('.')")
button14.textContent="."
button15.setAttribute("onclick","afficher('0')")
button15.textContent="0"
button16.setAttribute("onclick","calculer('')")
button16.textContent="="
button17.setAttribute("onclick","afficher('/')")
button17.textContent="/"


// les tr options

// sortie des element dans le html
div.innerHTML=""
h1.innerHTML = "Calculatrice";
div2.innerHTML=""

input.innerHTML = "";
table.innerHTML= "";





// Gestion des Enfants dans le Body = Page HTML
body.appendChild(div)
div.appendChild(h1)
div.appendChild(div2)
div2.appendChild(table)

// zone de calcule
table.appendChild(tr1)
tr1.appendChild(td1)
td1.appendChild(input)
tr1.appendChild(td2)
td2.appendChild(button1)

// du 1 au +
table.appendChild(tr2)
tr2.appendChild(td3)
td3.appendChild(button2)
tr2.appendChild(td4)
td4.appendChild(button3)
tr2.appendChild(td5)
td5.appendChild(button4)
tr2.appendChild(td6)
td6.appendChild(button5)

// du 4 au  -
table.appendChild(tr3)
tr3.appendChild(td7)
td7.appendChild(button6)
tr3.appendChild(td8)
td8.appendChild(button7)
tr3.appendChild(td9)
td9.appendChild(button8)
tr3.appendChild(td10)
td10.appendChild(button9)

// du 7 au *
table.appendChild(tr4)
tr4.appendChild(td11)
td11.appendChild(button10)
tr4.appendChild(td12)
td12.appendChild(button11)
tr4.appendChild(td13)
td13.appendChild(button12)
tr4.appendChild(td14)
td14.appendChild(button13)

// du . au /
table.appendChild(tr5)
tr5.appendChild(td15)
td15.appendChild(button14)
tr5.appendChild(td16)
td16.appendChild(button15)
tr5.appendChild(td17)
td17.appendChild(button16)
tr5.appendChild(td18)
td18.appendChild(button17)


// fonction pour la calculatrice ( prend le chiffre et renvoie la sortie)
function calculer(){
    let a = document.getElementById("output").value
    let b = eval(a)
    document.getElementById("output").value = b
}

// fonction qui affiche la valeur
function afficher(val){
    var t1 = document.getElementById("output").value+=val
// console.log(val, t1);
}

console.log("okddd")
function effacer (){
    document.getElementById("output").value=""
}