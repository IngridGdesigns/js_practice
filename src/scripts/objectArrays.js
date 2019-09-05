//Constructor Function is used to instantiate objects

/* Example 1 */
//primary way to create objects using functions
function Cat(id) {
  this.catId = id; //this stores the property id
  console.log(this); //this keyword access the content of the object
}

let kitty = new Cat("meeoooww"); //brand new empty objects
console.log(kitty); //Cat { catId: 'meeoooww' }

////////////////////////////////////////////////////////////////

//Prototypes - basics

/* Example 1 */
function Bird(song) {
  this.birdSong = song; //consturctor function is simple
}

Bird.prototype.sing = function() {
  //we can add methods directly on prototype
  console.log("The bird sings: " + this.birdSong);
};

let parrot = new Bird("lalalalalLAAAA");
parrot.sing();

////////////////////////////////////////////////////////////////

//String.prototype

/* Example  1*/
String.prototype.hello = function() {
  return this.toString() + " Hello ";
};
console.log("foo".hello()); //foo Hello

////////////////////////////////////////////////////////////////

//JSON javascript object notation
/* the purpose of JSON is a general format to represent values and objects
it’s easy to use JSON for data exchange when the client uses JavaScript 
and the server is written on Ruby/PHP/Java/Whatever. 

Javascript provides methods: 
JSON.stringify to convert objects into JSON
and JSON.parse to convert JSON back into an object
*/

//JSON Stringify
/* Example 1 */
let lunch = {
  beverage: "water",
  maincourse: "ham and cheese",
  sidedish: "ceasar salad",
  dessert: "mango mochi"
};

let lunchJson = JSON.stringify(lunch); //takes object and converts into a string
console.log(lunchJson);
//{"beverage":"water","maincourse":"ham and cheese","sidedish":"ceasar salad","dessert":"mango mochi"}

/* JSON objects have several important differences from object literals
- Strings use double quotes ONLY, so 'Radiant' becomes "Radiant"
- Object property names are double-quoted too. So color: '#f43560' becomes "color": "#f43560"
 
nested objects are supported and converted automatically!!
See example 2
*/

/* Example 2 */
let meetup = {
  title: "Conference",
  participants: ["WSC", "Github"]
};

let meetupJson = JSON.stringify(meetup, null, 2); //space argument is telling JS to
//show nested objects on mutliple lines, w/indentation of 2 spacxes inside an object
console.log(meetupJson);
//Output: isin't it pretty??
// {
//     "title": "Conference",
//     "participants": [
//      "WSC",
//      "Github"
//     ]
//    }
//the null holds a place for a function

let room = {
  number: 23
};

let party = {
  title: "Dance time",
  date: new Date(Date.UTC(2017, 0, 1)),
  room //automatically calls if it is available room ={ number: 23 }
};

console.log(JSON.stringify(party));

//JSON PARSE
let jsonIn = `[{"may": 5}, {"june": 6} ]`;
let months = JSON.parse(jsonIn);
console.log(months); //parsed into a regualar object notation
////////////////////////////////////////////////////////////////

//Array Iteration

/* Example  1*/
// Using animalID we will explore various methods to iterate through arrays in place of a for loop
let animalID = [
  { petID: 123, dog: "big", color: "black" },
  { petID: 43, cat: "small", color: "orange" },
  { petID: 378, bird: "tiny", color: "blue" }
];

//forEach
animalID.forEach(color => console.log(color)); //calls a function on each element on the array


//Filter
//loop through the entire array, returns filtered new array  cat:203, color: orange`
let animalList = animalID.filter(animal => animal.color === "orange");
console.log(animalList);


//Every
let animalresults = animalID.every(pet => pet.petID > 10);
console.log(animalresults); //returns true, every pet Id is greater than 10
//we only get one true or false back


//Locate the first Match
let pet = animalID.find(
  pet => pet.petID < 50 //will locate the first intanse of petID less than 50
  //it stopped its execution on the array index of 1, on petID: 43
);
console.log(pet); //{ petID: 43, cat: 'small', color: 'orange' }


//Find the index of any element that you choose
const index = animalID.findIndex(
    indexNum => indexNum.petID === 378 //index of petID: 378 is number 2
)
console.log(index);