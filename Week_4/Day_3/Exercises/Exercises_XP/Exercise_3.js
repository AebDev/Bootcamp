const users = { user1: 18273, user2: 92833, user3: 90315 };

let objectToArray = Object.entries(users);

let objectx2ToArray = objectToArray.map(([key, value]) => [key, value * 2]);

