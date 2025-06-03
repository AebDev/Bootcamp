const param = {
    q: 'sun',
    limit: 10,
    offset: 2,
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
}
const url = `https://api.giphy.com/v1/gifs/search?${Object.entries(param).map(([key, value]) => key + '=' + value).join('&')}`;


fetch(url)
    .then(response => {
        if (response.ok)
            return response.json();
        else
            throw new Error(response.statusText);
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))


