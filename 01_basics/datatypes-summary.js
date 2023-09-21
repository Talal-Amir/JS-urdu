//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["superman", "spiderman", "rex"];
let myObj = {
    name: "talal",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*        Memories        */ 
// Stack (Primitive)
// Heap (Non-Primitive)

let myyoutubename = "talalshahcodes"

let anothername = myyoutubename
anothername = "talalbhaig"

console.log(anothername);

let userOne = {
    email: "talal@satisfies.com"
}

let userTwo = userOne

userTwo.eamil = "asdkkdsf@gas.com"


console.log(userone);
console.log(usertwo);
