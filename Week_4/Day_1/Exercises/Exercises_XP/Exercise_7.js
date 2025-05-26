((username) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    div.classList.add("user");
    p.textContent = `Hello ${username}`;
    div.appendChild(p);
    let img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    img.width = 50;
    div.appendChild(img);
    document.getElementById("navbar").appendChild(div);
})('John')