const people = ["Greg", "Mary", "Devon", "James"];


people.shift();

people[people.length - 1] = "Jason";

people.push("Mouhcine");

console.log(people.indexOf("Mary"));

const people_copie = people.slice(1, people.length);

index_of_foo = people.indexOf("Foo");
// Foo not found.

let last = people[people.length - 1];

for (x of people) {
    console.log(x);
}

for (x of people) {
    console.log(x);
    if (x === "Devon") {
        break;
    }
}



