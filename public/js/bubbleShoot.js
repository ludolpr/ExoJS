// lien du site 
// http://rembound.com/articles/bubble-shooter-game-tutorial-with-html5-and-javascript


// La fonction est appelée lorsque la fenêtre est entièrement chargée.
window.onload = function {
    // Obtenir le canevas et le contexte
    var canevas = document.getElementById("viewport")

    var context = document.getContext("2d")

    // Temps et images par seconde
    var lastFrame = 0;
    var fpsTime = 0;
    var frameCount = 0;
    var fps = 0;

    // Niveau

    var level = {
        x: 4,            //  X position
        y: 83,           //  y position
        width: 0,        //  Largeur, est calculée
        height: 0,       //  Hauteur, est calculée
        columns: 15,     //  Nombre de colonnes de tuiles
        rows: 14,        //  Nombre de ligne de tuiles
        tilewidth: 40,   //  Largeur visuelle d'une dalle
        tileHeight: 40,  //  Hauteur visuelle d'une dalle
        rowheight: 34,   //  Hauteur d'une ligne
        radius: 20,      //  Rayon de collision de la bulle
        tiles: []        //  Le tableau bidimensionnel des tuiles
    };

    // Définir une classe de tuiles
    var Tile = function(x , y, type, shift){
        this.x = x;
        this.y = y;
        this.type = type;
        this.removed = false;
        this.shift = shift;
        this.velocity = 0;
        this.alpha = 1;
        this.processed = false
    };

    // Joueur
    var joueur = {
        x: 0,
        y: 0,
        angle: 0,
        tileType: 0,

        bubble: {
            x: 0,
            y: 0,
            angle: 0,
            speed: 1000,
            dropspeed: 900,
            tiletype: 0,
            visible: false

        },
        nextBubble: {
            x: 0,
            y: 0,
            tileType: 0
        }
    }
    // Table de décalage des voisins
    var neighborsoffsets = [[[1,0], [0,1], [-1, 1], [-1, 0], [-1, -1], [0, -1]], // Tuiles de rangées paires
    [[1, 0], [1, 1], [0, 1], [-1, 0], [0, -1], [1, -1]]];  // Tuiles de la rangée impaire

    // Nombre de couleurs différentes
    var bubbleColors = 7;

    // Statistique du jeu
    var gameStates = { init:0, ready:1, shootBubble:2, removeCluster:3,gameOver:4};
    var gameState = gameStates.init;

    //Score

    var score = 0;

    var conteur = 0;
    var rowOffset = 0;

    // Variables d'animation

     var animationState = 0;
     var animationTime = 0;

    //Groupements

     var showCluster = false;
     var custer = [];
     var floatingCluster = [];

    //  images
     var image = [];
     var bubbleImages;

    // Chargement des variables globales de l'image
    var loadCount = 0;
    var loadTotal = 0;
    var preLoaded = false ;

    //Chargement des images
    function loadImages(imageFiles){
        // Initialiser les variables
        loadCount = 0;
        loadTotal = imageFiles.lenght;
        preLoaded = false;

        // Chargement de l'images
        var loadImages = [];
        for (var i=0; i<imageFiles.lenght;i++){

            // Créer l'objet image
            var image = new Image();

            // Ajouter le gestionnaire d'événement onload
            image.onload = function(){
                loadCount++;
                if(loadCount == loadTotal){
                    // chargement OK !
                    preLoaded = true;
                }
            };
            // Définir l'url source de l'image
            image.src = imageFiles[i];

            // Sauvegarde dans le tableau des image
            loadImages[i] = image;

        }
        // Retourne un tableau d'images
        return loadImages;
    }
    // fin de la fonction
}

// Initialise le jeu
function init(){
    // Chargement de l'images
    images = loadImages(["bubble-spirites.png"])
    
}