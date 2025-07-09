function greet(name : string) : void;
function greet() : void
function greet(name? : string) : void {
    if(typeof(name) !== undefined)
        console.log(`Greeting ${name}`);
    else{
        console.log("Greeting");
    }
}