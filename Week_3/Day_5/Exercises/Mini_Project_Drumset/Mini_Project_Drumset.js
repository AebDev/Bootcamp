let drumset = document.getElementById("drumset");
let btn = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];


let audioList = [{
    btn: 'A',
    audio: './sounds/boom.wav',
    name: 'Boom'
}, {
    btn: 'S',
    audio: './sounds/clap.wav',
    name: 'Clap'
}, {
    btn: 'D',
    audio: './sounds/hihat.wav',
    name: 'Hihat'
}, {
    btn: 'F',
    audio: './sounds/kick.wav',
    name: 'Kick'
}, {
    btn: 'G',
    audio: './sounds/openhat.wav',
    name: 'Openhat'
}, {
    btn: 'H',
    audio: './sounds/ride.wav',
    name: 'Ride'
}, {
    btn: 'J',
    audio: './sounds/snare.wav',
    name: 'Snare'
}, {
    btn: 'K',
    audio: './sounds/tink.wav',
    name: 'Tink'
}, {
    btn: 'L',
    audio: './sounds/tom.wav',
    name: 'Tom'
}];

for (item of audioList) {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let audio = document.createElement("audio");
    audio.src = item.audio;
    audio.id = item.name;
    audio.type = "audio/wav";
    console.log(item);
    h1.innerHTML = item.btn;
    p.innerHTML = item.name;
    applyCss(div, h1, p);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(audio);
    drumset.appendChild(div);


}

addEventListener("click", (e) => {
    e.target.children[2].play();
})

addEventListener("keypress", (e) => {


    let index = btn.indexOf(e.key.toUpperCase());
    console.log(index);
    if (index != -1) {
        console.log(e.key);
        drumset.children[index + 1].children[2].play();
    }

})



function applyCss(a, b, c) {

    a.classList.add("border");
    b.classList.add("pointer-events-none");
    c.classList.add("pointer-events-none");
    a.classList.add("cursor-pointer");
    a.classList.add("hover:scale-110");
    a.style = "background-color: #3D2901; opacity: 0.8; width: 100px; height: 100px; margin: 10px; border-color: #FFCC02; border-size: 5px; text-align: center;display: flex;align-items: center; justify-content: center;flex-direction: column;";
    c.style = "text-align: center;color: #FFCC02;foont-size: 14px;";
    b.style = "text-align: center;color: #FFF;foont-size: 25px; font-weight: bold;";
}