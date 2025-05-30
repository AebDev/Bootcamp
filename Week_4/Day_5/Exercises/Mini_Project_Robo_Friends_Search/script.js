const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];



const search = document.getElementById('search');
const field = document.getElementById('container');

const findRobots = (inpt = '') => {
    field.innerHTML = '';
    const filteredRobots = inpt == '' ? robots : robots.filter(robot => robot.name.toLowerCase().includes(inpt.toLowerCase()));
    filteredRobots.forEach(robot => {
        const cards = document.createElement('div');
        const info = document.createElement('div');
        const picture = document.createElement('img');
        const name = document.createElement('p');
        const email = document.createElement('p');

        cards.classList.add('cards');
        info.classList.add('info');
        picture.classList.add('picture');
        name.classList.add('name');
        email.classList.add('email');

        picture.src = robot.image;
        name.textContent = robot.name;
        email.textContent = robot.email;

        info.appendChild(name);
        info.appendChild(email);
        cards.appendChild(picture);
        cards.appendChild(info);
        field.appendChild(cards);

    });
};

search.addEventListener('input', (e) => {
    findRobots(e.target.value);
});
