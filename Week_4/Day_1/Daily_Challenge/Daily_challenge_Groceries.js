let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries["fruits"].forEach(fruit => {
        console.log(`${fruit}`);
    })
}

const cloneGroceries = () => {
    let user = client;
    client = "Betty"; // No, Changing client will not  affect user, Because strings are primitive types  and are copied by value.
    let shopping = groceries;
    shopping["totalPrice"] = '35$'; //Yes, changing shopping.totalPrice will also update groceries.totalPrice,Because both shopping and groceries refer to the same object in memory.
    shopping['other']['paid'] = false; // Yes, because shopping.other and groceries.other refer to the same nested object, So modifying shopping.other.paid will reflect in groceries.other.paid.

}
cloneGroceries();
