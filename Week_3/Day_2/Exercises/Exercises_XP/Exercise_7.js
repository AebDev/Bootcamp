const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

society_name = '';

for (let name of names.sort()) {
    society_name += name.charAt(0);
}

console.log(society_name);