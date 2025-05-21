let solarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

for (planet of solarSystem) {
    let div = document.createElement("div");
    div.classList.add("planet");
    div.classList.add(planet.toLowerCase());
    div.innerHTML = planet;
    document.body.appendChild(div);
}

