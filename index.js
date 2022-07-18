console.info(2);
console.debug(2 + 3);
console.warn(6 * 3 - 10);
// console.error("started");
var myName = "Claudiu";
var age = "42";

// console.info("My name is " + myName + " I'am " + age + "years old");
age = 30;
// console.info("My name is " + myName + " I'am " + age + "years old");
age = 31;
console.info("My name is " + myName + " I'am " + age + "years old");
var jobTitle = " Cursant web developer";
var mottoElement = document.getElementById("motto");
console.info(mottoElement);
console.warn(mottoElement.innerHTML);
mottoElement.innerHTML += " & " + jobTitle;

function hidePage(id) {
  // console.info("hide", id);
  document.getElementById(id).style.display = "none";
}
function showPage(id) {
  document.getElementById(id).style.display = "block";
  // console.warn("show", id);
}
function hideAllPages() {
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
  hidePage("home");
}
function showHomePage() {
  hideAllPages();
  showPage("home");
}

function showSkillsPage() {
  hideAllPages();
  showPage("skills");
}
function showProjectsPage() {
  hideAllPages();
  showPage("projects");
}
function showLanguagesPage() {
  hideAllPages();
  showPage("languages");
}
showHomePage();
