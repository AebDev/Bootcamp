document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");
let li = document.createElement("li");
let text = document.createTextNode("Logout");
li.appendChild(text);
document.querySelector("ul").appendChild(li);

console.log(document.querySelector("ul").firstElementChild.textContent);

console.log(document.querySelector("ul").lastElementChild.textContent);

