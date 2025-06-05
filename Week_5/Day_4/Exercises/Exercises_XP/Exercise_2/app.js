import { listPerson } from "./data.js";

const avgAge = (list) => {
    let avg = 0;
    for (let person of list) {
        avg += person.age;
    }
    avg = avg / list.length;
    console.log('Average age is ', avg);
}

avgAge(listPerson);