//User interface logic
window.onload = function()  {
let body = window.document.querySelector("body");
let darkMode = window.document.querySelector("button#darkMode");
darkMode.onclick = function() {  
  body.style.backgroundColor = "black";
  body.style.color = "white";
};
let lightMode = window.document.querySelector("button#lightMode");
lightMode.onclick = function()  {
  body.style.backgroundColor = "white";
  body.style.color = "black";
};
let increasedFontSize = window.document.querySelector("button#increasedFontSize");
increasedFontSize.onclick = function()  {
  body.style.fontSize = "1.8em";
};
let defaultFontSize = window.document.querySelector("button#defaultFontSize");
defaultFontSize.onclick = function () {
body.style.fontSize = null;
};
};