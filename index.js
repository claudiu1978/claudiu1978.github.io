console.info(2);
console.debug(2 + 3);
console.warn(6 * 3 - 10);
// console.error("started");
var myName = "Claudiu";
var age = "30";

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

function hide(id) {
  // console.info("hide", id);
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
  // console.warn("show", id);
}

var activePage = "skills";

function showPage(nextPage) {
  console.warn("change", activePage, "to", nextPage);
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();
// initializare; conditie ; post exec
function displaySkills() {
  console.info("displaySkills");
  for (var i = 1; i < 3; i++) {
    console.info(`${i}*5=${i * 5}`);
    // i = i + 1;
  }
  var ul = document.querySelector("#skills ul");
  var skills = ["html", "css", "js"];
  console.info(skills);
  for (var i = 0; i < skills.length; i++) {
    ul.innerHTML += `<li>${skills[i]}</li>`;
  }
}
displaySkills();
