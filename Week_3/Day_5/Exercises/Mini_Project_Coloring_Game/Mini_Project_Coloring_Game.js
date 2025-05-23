let colors = ['#FB2C36', '#FF4500', '#FFA500', '#FFFF00', '#9ACD32', '#90EE90', '#008000', '#40E0D0', '#00FFFF', '#87CEFA', '#1E90FF', '#0000FF', '#00008B', '#4B0082', '#8B008B', '#EE82EE', '#FFB6C1', '#D3D3D3', '#808080', '#000000', '#FFFFFF'];
let sideBar = document.getElementById("sideBar");
let paintBoard = document.getElementById("paintBoard");
let selector;
let color;

for (color of colors) {
    let div = document.createElement("div");
    div.style.backgroundColor = color;
    div.classList.add("border");
    div.classList.add("colors");
    sideBar.appendChild(div);
}

for (let i = 0; i < 1500; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.backgroundColor = '#fff';
    paintBoard.appendChild(div);
}


addEventListener("mousedown", (down) => {
    selector = down.target;
    if (selector.classList.contains("border")) {
        if (selector.classList.contains("colors")) {
            color = selector.style.backgroundColor;
            console.log(color);
        } else {
            console.log("reset started");
            erase();
        }
    }

    if (selector.classList.contains("square")) {

        selector.style.backgroundColor = color;
        addEventListener("mouseover", painter)
    }
})

addEventListener("mouseup", () => {
    removeEventListener("mouseover", painter)
})


const colorPicker = () => {

}

const painter = (move) => {
    selector = move.target;
    if (selector.classList.contains("square")) {

        selector.style.backgroundColor = color;
        console.log(selector);
    }
}

const erase = () => {
    for (square of document.querySelectorAll(".square")) {
        square.style.backgroundColor = "#fff";
        console.log("reset done");
    }
}

