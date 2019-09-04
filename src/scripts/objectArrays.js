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

Javascript provides methods: JSON.stringify to convert objects into JSON
and JSON.parse to confvert JSON back into an object
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
////////////////////////////////////////////////////////////////

//

/* Example  */