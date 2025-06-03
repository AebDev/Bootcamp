const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const gifForm = document.getElementById('gifForm');
const categoryInput = document.getElementById('categoryInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllButton = document.getElementById('deleteAllGifs');


async function fetchRandomGif(category) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${category}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching GIF:", error);
        return null;
    }
}


function appendGif(gifData) {
    if (!gifData || !gifData.images || !gifData.images.original || !gifData.images.original.url) {
        console.error("Invalid GIF data received:", gifData);
        alert("Could not find a GIF for that category. Please try another one.");
        return;
    }

    const gifUrl = gifData.images.original.url;

    const gifWrapper = document.createElement('div');
    gifWrapper.classList.add('gif-container');

    const img = document.createElement('img');
    img.src = gifUrl;
    img.alt = gifData.title || 'Random GIF';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        gifWrapper.remove();
    });

    gifWrapper.appendChild(img);
    gifWrapper.appendChild(deleteButton);
    gifContainer.prepend(gifWrapper);
}

gifForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const category = categoryInput.value.trim();
    if (category) {
        const gif = await fetchRandomGif(category);
        if (gif) {
            appendGif(gif);
        }
        categoryInput.value = '';
    }
});

deleteAllButton.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});