console.log(document.getElementById("container"));
document.getElementsByClassName("list")[0].getElementsByTagName("li")[1].innerHTML = "Richard";
document.getElementsByClassName("list")[1].removeChild(document.querySelectorAll("li")[3]);

for (elm of document.querySelectorAll("ul>li:first-child")) {
    elm.innerHTML = "Mouhcine";
}

for (elm of document.querySelectorAll("ul")) {
    elm.classList.add("student_list");
}

document.getElementsByClassName("student_list")[0].classList.add("university", "attendance");

document.getElementById("container").setAttribute("style", "background-color: light blue; padding: 10px;");

document.getElementsByClassName("list")[1].children[1].setAttribute("style", "visibility: hidden;");
document.getElementsByClassName("list")[0].children[1].setAttribute("style", "border: 1px solid black;");

