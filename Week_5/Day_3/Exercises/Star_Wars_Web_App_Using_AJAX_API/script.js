
const url = 'https://www.swapi.tech/api/people/';
const find = document.getElementById('find');
const container = document.getElementById('container');

const getRandInt = () => Math.floor(Math.random(0) * 83);

const getCharacter = async () => {
    try {
        loading();
        const charId = getRandInt();
        const res = await fetch(`${url}${charId}`);
        if (!res.ok)
            throw new Error('Oh No! That person isnt available.');
        const data = await res.json();
        console.log(data.result.properties.homeworld);
        getPlanet(data.result.properties);

    } catch (error) {
        container.innerHTML = error.message;

    }
}

const getPlanet = async (character) => {
    try {
        const res = await fetch(`${character.homeworld}`);
        if (!res.ok)
            throw new Error('Oh No! That planet isnt available.');
        const data = await res.json();

        viewCharacter(character, data.result.properties);

    } catch (error) {
        container.innerHTML = error.message;
    }
}

const viewCharacter = (character, planet) => {
    const name = document.createElement('h2');
    const height = document.createElement('p');
    const gender = document.createElement('p');
    const birthYear = document.createElement('p');
    const homeWorld = document.createElement('p');

    name.textContent = character.name;
    height.textContent = `Height: ${character.height}`;
    gender.textContent = `Gender: ${character.gender}`;
    birthYear.textContent = `Birth Year: ${character.birth_year}`;
    homeWorld.textContent = `Home World: ${planet.name}`;

    container.innerHTML = '';

    container.appendChild(name);
    container.appendChild(height);
    container.appendChild(gender);
    container.appendChild(birthYear);
    container.appendChild(homeWorld);

}

find.addEventListener('click', getCharacter);


const loading = () => {
    container.innerHTML = '';
    const spinger = document.createElement('i');
    spinger.classList.add('fa', 'fa-spinner', 'fa-spin', 'fa-2xl');
    const h2 = document.createElement('h2');
    h2.textContent = 'Loading...';
    container.appendChild(spinger);
    container.appendChild(h2);

}