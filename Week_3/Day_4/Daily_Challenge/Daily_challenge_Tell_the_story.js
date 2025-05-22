let form = document.getElementById("libform");
let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");
let libButton = document.getElementById("lib-button");
let story = document.getElementById("story");

console.log(adjective);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (noun.value == "" || adjective.value == "" || person.value == "" || verb.value == "" || place.value == "") {
        alert("Please fill in all fields");
        return
    }
    else {
        story.innerHTML = `Once upon a time, a ${adjective.value} ${noun.value} named ${person.value} went to ${place.value} to ${verb.value}.`;

    }
})