// creer la racine
const root = document.querySelector(":root")
// nomination des couleurs
root.style.setProperty("--white", "#f8f8f8 ");
root.style.setProperty("--dark", "#000000");
root.style.setProperty("--light", "#194569");
//Appelle des couleurs
const colors = {
  white: getComputedStyle(root).getPropertyValue("--white"),
    dark: getComputedStyle(root).getPropertyValue("--dark"),
    light: getComputedStyle(root).getPropertyValue("--light")
}

//Ecoute du local storage
const originalSetItem = localStorage.setItem;
localStorage.setItem = function () {
    document.createEvent("Event").initEvent("itemInserted", true, true);
    originalSetItem.apply(this, arguments);
    if (this.dark === "true") {
        document.body.style.color = colors.white;
        document.body.style.backgroundColor = colors.dark;
    } else if (this.dark === "false") {
        document.body.style.color = colors.white;
        document.body.style.backgroundColor = colors.light;
    } else return;
}
console.log("hey ho");

//chargement de la page
const preLoad = () => {
  document.title = "Page pour passé en dark mode";
  if (localStorage.getItem("dark") === "true") {
    document.body.style.color = colors.white;
    document.body.style.backgroundColor = colors.dark;
  } else {
    document.body.style.color = colors.white;
    document.body.style.backgroundColor = colors.light;
  }
}
// parent  global 
const ludolpr = document.getElementById("ludolpr")

// creer le titre h1
const h1 = document.createElement("h1");
h1.textContent = "Page de passage en dark mode !!"
h1.style.color = "#194569!"
h1.style.textAlign = "center"

// btn dark mode
const btn = document.createElement("button")
btn.textContent = " Dark mode"
btn.style.padding = "5px"
btn.style.backgroundColor = "#ffffff"
btn.style.borderRadius = " 30px"
btn.style.border = " solid 2px #260101"
btn.style.textAlign = "center"
btn.addEventListener("click", () => {
  const lsDark = localStorage.getItem("dark");
  localStorage.setItem("dark", !lsDark || lsDark === "false"
  ? true
  : false
  )
}, false)
// donne des enfant a ludolpr
ludolpr.appendChild(h1)
ludolpr.appendChild(btn)