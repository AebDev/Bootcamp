const url = ' https://pokeapi.co/api/v2/';
let counter = 1;
let powerSwitch = false;

const power = document.getElementById('power');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const screen = document.getElementById('screen');


const getPokeData = async () => {
    try {

        const res = await fetch(`${url}pokemon/${counter}`);
        if (!res.ok)
            throw new Error('Something went wrong');
        const data = await res.json();
        showPoke(data);

    } catch (error) {
        alert(error.message);
    }
}


const nextPoke = () => {
    if (powerSwitch) {
        counter++;
        getPokeData();
    }
}

const prevPoke = () => {
    if (counter > 1 && powerSwitch) {
        counter--;
        getPokeData();
    }
}

const showPoke = (data) => {
    description.innerHTML = '';
    screen.src = data.sprites.front_default;
    const name = document.createElement('h1');
    const id = document.createElement('p');
    const height = document.createElement('p');
    const weight = document.createElement('p');
    const type = document.createElement('p');
    name.innerHTML = data.name;
    id.innerHTML = `Pokemon N° ${data.id}`;
    height.innerHTML = `Height: ${data.height}`;
    weight.innerHTML = `Weight: ${data.weight}`;

    type.innerHTML = `Type: ${data.types.map(type => type.type.name).join(', ')}`;
    description.appendChild(name);
    description.appendChild(id);
    description.appendChild(height);
    description.appendChild(weight);
    description.appendChild(type);
}

power.addEventListener('click', () => {
    powerSwitch = !powerSwitch;
    if (powerSwitch)
        getPokeData();
    else
        screen.src = '';
});

next.addEventListener('click', nextPoke);
prev.addEventListener('click', prevPoke);