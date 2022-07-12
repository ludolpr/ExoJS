let keyGive = "28067265-e1b2e13d58c37680a1a031824";

// key & import de paxabay
function getData() {
  var inputs = document.getElementById("filtre");

  // vider le row qui contient tout les éléments afin d'afficher dynamiquement les éléments nature
  document.getElementById("row").innerHTML = "";

  if (inputs) {
    var search = inputs.value;
  } else {
    ("nature");
  }

  //import de pixabay
  fetch(`https://pixabay.com/api/?key=${keyGive}&per_page=72&lang=fr&q=${search}`).then(function (response) {
      response.json().then(function (pixdata) {
        console.log(pixdata);
          getImg(pixdata);
      });
    }
  );
}
create();
getData();

// creer une section de page dynamique qui gère la recherche
function create() {
  header = document.createElement("header");
  titre = document.createElement("h1");
  var input = document.createElement("input");
  
  input.setAttribute("class", "txt-center mt250");
  input.setAttribute("placeholder", "recherche");
  input.setAttribute("type", "search");
  
  input.setAttribute("id", "filtre");
  input.setAttribute("onkeyup", "getData()");
  
  
  titre.innerHTML = "bienvenue sur mon stockage d'images";
  document.body.appendChild(header);
  header.appendChild(input)
  var img = document.createElement("img");
  img.setAttribute("class", "img-fluid w-50");
  
  header.appendChild(img);
  header.appendChild(titre);

  header.setAttribute("class", "txt-center p-5");

  titre.setAttribute("class", "text-center mt-5 p-5");

  var app = document.createElement("div");
  var cont = document.createElement("div");
  var row = document.createElement("div");
  app.setAttribute("id", "app");
  app.setAttribute("class", "container");
  cont.setAttribute("class", "container-fluid");
  row.setAttribute("id", "row");
  row.setAttribute("class", "m-5");
  document.body.appendChild(app);
  app.appendChild(cont);
  cont.appendChild(row);
}

// boucle pour prendre toutes les données
function getImg(data) {
  // boucle
  for (let i = 0; i < data.hits.length; i++) {
    row = document.getElementById("row"); // reprend l'élément row deja crée
    // console.log(i);
    var img = document.createElement("img"); //creer l'élément img
    var h1 = document.createElement("h3"); // creer l'élément h1
    img.src = data.hits[i].previewURL;
    h1.innerHTML = data.hits[i].user;

    var col = document.createElement("div"); //creer l'élément col

    row.setAttribute("class", "row");
    col.setAttribute("class", "col-md-3");

    row.appendChild(col);
    col.appendChild(h1); // h1 enfant du body
    col.appendChild(img);
  }
}
