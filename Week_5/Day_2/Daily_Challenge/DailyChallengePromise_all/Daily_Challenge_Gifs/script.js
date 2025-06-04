document.getElementById('sunriseForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const lat1 = document.getElementById('lat1').value;
    const lng1 = document.getElementById('lng1').value;
    const lat2 = document.getElementById('lat2').value;
    const lng2 = document.getElementById('lng2').value;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>Loading sunrise data...</p>';


    const apiUrl1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}`;
    const apiUrl2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}`;

    const fetchSunrise = (url, cityName) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status} for ${cityName}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.status !== "OK") {
                    throw new Error(`API error for ${cityName}: ${data.status}. Check coordinates.`);
                }
                return data;
            });
    };

    const promise1 = fetchSunrise(apiUrl1, "City 1");
    const promise2 = fetchSunrise(apiUrl2, "City 2");

    Promise.all([promise1, promise2])
        .then(dataArray => {

            const resultsCity1 = dataArray[0].results;
            const resultsCity2 = dataArray[1].results;

            resultsDiv.innerHTML = `
                        <p><strong>City 1 Sunrise:</strong> ${resultsCity1.sunrise}</p>
                        <p><strong>City 2 Sunrise:</strong> ${resultsCity2.sunrise}</p>
                    `;
        })
        .catch(error => {
            console.error('Error fetching sunrise data:', error);
            resultsDiv.innerHTML = `<p class="error-message">Error: ${error.message}</p>`;
        });
});