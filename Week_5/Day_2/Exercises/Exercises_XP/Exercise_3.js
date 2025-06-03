const url = "https://www.swapi.tech/api/starships/9/";

const starWarsFunc = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        else {
            throw new Error(response.statusText);
        }
    }
    catch (err) {
        console.log(err);
    }
}

starWarsFunc();