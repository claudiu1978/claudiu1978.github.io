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

function showHomePage() {
  document.getElementById("home").style.display = "block";
}
function showSkillsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
}
function showProjectsPage() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
}
function showLanguagesPage() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "block";
}
showHomePage();
