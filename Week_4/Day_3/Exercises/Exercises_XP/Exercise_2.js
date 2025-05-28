function displayStudentInfo(objUser) {
    let { first, last } = objUser;
    return `Your full name is ${first} ${last}`
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });