

setTimeout(hello, 2000);

function hello() {
    alert("Hello");
}

setTimeout(add_paragraph, 2000);
function add_paragraph() {
    let p = document.createElement("p");
    p.innerHTML = "Hello World";
    document.getElementById("container").appendChild(p);
}

let interval = setInterval(add_paragraph, 2000);



let clear = document.getElementById("clear");

clear.addEventListener("click", () => {
    clearInterval(interval);
});