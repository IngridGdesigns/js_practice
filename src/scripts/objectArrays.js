//Constructor Function is used to instantiate objects


/* Example 1 */
//primary way to create objects using functions
function Cat(id) {
    this.catId = id; //this stores the property id
    console.log(this); //this keyword access the content of the object
}

let kitty = new Cat('meeoooww'); //brand new empty objects
console.log(kitty); //Cat { catId: 'meeoooww' }

////////////////////////////////////////////////////////////////

//Prototypes - basics

/* Example 1 */
function Bird(song){
    this.birdSong = song; //consturctor function is simple
}

Bird.prototype.sing = function(){ //we can add methods directly on prototype
    console.log('The bird sings: ' + this.birdSong);
};

let parrot = new Bird('lalalalalLAAAA');
parrot.sing();

////////////////////////////////////////////////////////////////

//String.prototype

/* Example  1*/
String.prototype.hello = function() {
    return this.toString() + ' Hello ';
}
console.log('foo'.hello()); //foo Hello

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
    beverage: 'water',
    maincourse: 'ham and cheese',
    sidedish: 'ceasar salad',
    dessert: 'mango mochi'
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
    title: 'Conference',
    participants: ['WSC', 'Github']
};

let meetupJson = JSON.stringify(meetup, null, 2);//space argument is telling JS to 
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

let room = {
    number: 23 
  };
  
  let party = {
    title: "Dance time",
    date: new Date(Date.UTC(2017, 0, 1)),
    room, //automatically calls if it is available room ={ number: 23 }
  };
  
 console.log( JSON.stringify(party) );

 //JSON PARSE
 let jsonIn = `[{"may": 5}, {"june": 6} ]`
 let months = JSON.parse(jsonIn);
 console.log(months); //parsed into a regualar object notation
////////////////////////////////////////////////////////////////

//Array Iteration

/* Example  1*/
let animalID = [
    {dog: 123, color: 'black'},
    {cat: 203, color: 'orange'},
    {bird: 43, color: 'blue'}
];

animalID.forEach( (color) => console.log(color));

let animalList = animalID.filter(
    animal => animal.color === 'orange'
);
console.log(animalList); //returns cat:203, color: orange