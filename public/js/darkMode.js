// creer la racine
const racine = document.querySelector(":root")
// nomination des couleurs
root.style.setProprety("--dark", "#023535");
root.style.setProprety("--light", "#2A8C82");
root.style.setProprety("--white", "#ffffff");
//Appelle des couleurs
const colors = {
    dark: getComputedStyle(root).getPropertyPriority("--dark"),
    light: getComputedStyle(root).getPropertyPriority("--light"),
    white: getComputedStyle(root).getPropertyPriority("--white")
}

//Ecoute du local storage
const originalSetItem = localStorage.setItem;
localStorage.setItem = function () {
    document.createElement("event").initEvent("intemInserted", true, true);
    originalSetItem.apply(this, arguments);
    if (this.dark === "true") {
        document.body.style.color = colors.dark;
        document.body.style.background = colors.white;
    } else if (this.dark === "false") {
        document.body.style.color = colors.dark;
        document.body.style.background = colors.white;
    } else return;
}
console.log("hey ho");

//chargement de la page
const preLoad = () => {
  document.title = "Page pour passé en dark mode";
  if (localStorage.getItem("dark") === "true") {
    document.body.style.color = colors.white;
    document.body.style.backgroundColor = colors.light;
  } else {
    document.body.style.color = colors.white;
    document.body.style.backgroundColor = colors.light;
  }
}

// creer le titre h1
const h1 = document.createElement("h1");
h1.textContent = "Page de passage en dark mode !!"
h1.style.color = "#9Bf2EA"
h1.style.textAlign = "center"

// btn dark mode
const btn = document.createElement("button")
btn.textContent = " Dark mode"
btn.style.backgroundColor = "#9Bf2EA"
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

ludolpr.appendChild(h1)
ludolpr.appendChild(btn)