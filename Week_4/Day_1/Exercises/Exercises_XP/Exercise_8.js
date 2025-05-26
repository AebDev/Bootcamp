// function makeJuice(size) {
//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//         document.write(`The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}".`);
//     }
//     addIngredients("apple", "banana", "orange");
// }



const makeJuice = (size) => {
    let ingredients = [];
    const addIngredients = (ingredient1, ingredient2, ingredient3) =>
        ingredients.push(ingredient1, ingredient2, ingredient3)

    addIngredients("apple", "banana", "orange");
    addIngredients("peach", "pineapple", "lemon");

    const displayJuice = () =>
        document.write(`The client wants a ${size} juice, containing ${ingredients.join(", ")}.`)

    displayJuice();
}
makeJuice("big");