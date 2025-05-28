/*1 : [2] === [2] : false 
    {} === {} : false


2 : 
object1 = 4 value of property number changed from 5 to 4
object2 = 4 value changed because object2 is a reference to object1
object3 = 4 value changed because object3 is a reference to object2 (reference to object1)
object4 = 5 we assign a new object with number 4

*/

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;

    }
}

class Mammal extends Animal {
    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white', 'Moooo');

console.log(farmerCow.sound('Moooo'));