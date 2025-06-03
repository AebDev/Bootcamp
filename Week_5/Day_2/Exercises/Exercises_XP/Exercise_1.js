const url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error(response.statusText);
        }
    }
    )
    .then(data => console.log(data))
    .catch(err => console.log(err));