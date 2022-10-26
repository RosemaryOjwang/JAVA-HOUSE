//User interface logic
window.onload = function()  {
let pageHeading = window.document.querySelector("h1.page-heading-align-left");
let body = window.document.querySelector("body");
let darkMode = window.document.querySelector("button#darkMode");
let heading =window.document.querySelector("h1.yellow-text");
darkMode.onclick = function() {  
  body.style.backgroundColor = "black";
  body.style.color = "white";
  pageHeading.style.color = "white";
  heading.style.color = "white";
};
let lightMode = window.document.querySelector("button#lightMode");
lightMode.onclick = function()  {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  pageHeading.style.color ="black";
  heading.style.color = "black";
};
let increasedFontSize = window.document.querySelector("button#increasedFontSize");
increasedFontSize.onclick = function()  {
  body.style.fontSize = "1.8em";
  pageHeading.style.fontSize = "2em";
  heading.style.fontSize = "1.9em";
};
let defaultFontSize = window.document.querySelector("button#defaultFontSize");
defaultFontSize.onclick = function () {
body.style.fontSize = null;
pageHeading.style.fontSize = null;
heading.style.fontSize = null;
};
body.onmouseover = function() {
  body.style.backgroundColor ="yellow";
}
body.onmouseout = function()  {
  body.style.backgroundColor = null;
}
};