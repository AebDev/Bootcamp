const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
{ name: "Liam", course: "Computer Science", isPassed: false },
{ name: "Jenner", course: "Information Technology", isPassed: true },
{ name: "Marco", course: "Robotics", isPassed: true },
{ name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
{ name: "Jamie", course: "Big Data", isPassed: false }];

const passedArray = students.filter(value => value.isPassed == true);

const chainedPassedArray = students.filter(value => value.isPassed == true).forEach(
    item => console.log(`Good job ${item.name}, you passed the course in ${item.course}`)
);