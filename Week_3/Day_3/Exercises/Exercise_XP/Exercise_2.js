const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

shoppingList = ["banana", "orange", "apple"];

const myBill = () => {

    price = 0;
    for (item of shoppingList) {
        if (stock[item] != 0) {
            price += prices[item];
            stock[item]--;
        }
    }
    console.log("The Total price : ", price);
}

myBill();