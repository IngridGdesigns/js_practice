/*Rest Parameter examples*/
//A rest parameter collects the arguments passed to a function, 
/* Example 1 */
function sendCookies(...allCookieIds) {
    allCookieIds.forEach( id =>  console.log(id));
}

sendCookies(24, 32, 12, 4);
//expected output: 24, 32, 12, 4


//Rest parameter must be the last parameter on the list
/* Example 2 */
function sendPies(flavor, ...allPieIds){
    allPieIds.forEach((id) => {
        if(id === 10){
            console.log(`${id} - ${flavor} mini pies`);
        } else{
            console.log(id); 
        }
    });
}
sendPies('Blueberry', 10, 24, 99);
//expected Output: 10-Blueberry mini pies, 24, 99


/* Example 3 */
function savoryFoods(savory1, savory2, ...params) {
    console.log(savory1, savory2, params);
}
let str = 'My favorite foods are: ';
savoryFoods(str + ' ' + 'burritos', 'tacos', 'pupusas', 'tostadas');
//expected output: My favorite foods are: burritos tacos [ 'pupusas', 'tostadas' ]





///////////////////////////////////////////////////////////////

//Destructuring Arrays

/* Example 1 */
let pieIds = [2, 5, 9];
let [pie1, pie2, pie3] = pieIds; //declare and initialize the variable at the same time

console.log(pie1, pie2, pie3);
//2, 5, 9


/* Example 2 */
let candyId = [44, 55, 134];
let candy1, remainingCandy; //declaring variable
[candy1, ...remainingCandy] = candyId; //destructuring on a seperate line

console.log(candy1, remainingCandy);
//44 [55, 134]


/* Example 3 */
// Because of the coma the index of zero gets skipped
let cookieTypes = ['sugar', 'butter', 'ginger'];
let remainingCookies;
[, ...remainingCookies] = cookieTypes;

console.log(remainingCookies);


/* Example 4 */
let fruitBasket = { item1: 'apple', item2: 'grapes', item3: 'raspberry' };

//let {item1, item2} = fruitBasket;
let {item3: berry} = fruitBasket;

console.log(berry);

/* Example 5 */

let parentObject = {
    title: 'Cooking healthy',
    childObject: {
      title: 'Prepping veggies and drinking juice'
    }
  };
// we target parentObject then assign the title of childObject to childTitle.
  let { title, childObject: { title: childTitleVeggies } } = parentObject;
  
  console.log(childTitleVeggies);

////////////////////////////////////////////////////////////////

//Destructuring Objects
/* Destructuring lets you extract values from arrays or objects then assign 
those values to distinct variables. */

/* Example 1 */
//Destructuring objects, such as JSON, use curly braces or hashes to 
//destructure
let bike = { id: 2045, style: 'cruiser'};
let {id, style } = bike;

console.log(id, style);


/* Example 2 */
//After initializing, if you want to destructure after you must put
//the variables in parenthesis, otherwise you will get an error, this
//error only occurs with objects not arrays as seen above
let skateboard = { serial: 8544, type: 'longboard'};
let serial, type;
({serial, type} = skateboard);//destructuring later in the code

console.log(serial, type);

////////////////////////////////////////////////////////////////

//Spread Syntax
//A spread operator expands an array or any type of expression.
/* Example 1 */
//Taking an array and were breaking it up, spread it out into various parameters
function seeColors(color1, color2, color3) {
    console.log(color1, color2, color3);
}

let colors = ['yellow', 'silver', 'blue'];//iterating throught elements of a string

seeColors(...colors);
//yellow, silver, blue


/* Example 2 */
//you can use the spread operator with the rest operator
function seeLetters(letter1, letter2, letter3, ...theRestofThevariables) {
    console.log(letter1, letter2, letter3);
    console.log(`this is the rest saved in rest parameter: ${theRestofThevariables}`);
}

let letters = ['a', 'XY', 'c', 'tuesday', 22, 'alphabet'];//iterating throught elements of a string

seeLetters(...letters);
//yellow, silver, blue

/* Example 3 */
//The original flavors and new flavors array are getting combined with the 
//inventory array using the spread operator.(instead of using the array.concant method)
const originalDesserts = ['Sundae', 'Banana-split'];

const newDesserts = ['Cheesecake', 'Crepe'];

const inventory = ['Chocolate', ...originalDesserts, 'Cotton Candy', ...newDesserts];
// With the spread operator, I'm passing all the values of originalFlavors and
// newFlavors to the inventory array by pre pending the three dots to the variable names.

console.log(inventory);
//expected output: 
//  [
//     'Chocolate',
//     'Sundae',
//     'Banana-split',
//     'Cotton Candy',
//     'Cheesecake',
//     'Crepe'
//  ];

/* Example 4 */
// we split an array into single arguments,then pass them to a 
// function as separate arguments using the spread operator.

function madLibs (name, iceCreamFlavor) {
    console.log(`${name} really likes ${iceCreamFlavor} ice cream.`);
  }
  
  let args = ['Gabe', 'Lemon'];
  
  madLibs(...args);

////////////////////////////////////////////////////////////////

/* Converting integers and decimals */

 //make sure it starts at a number to convert types, 
console.log(Number.parseInt('33')); //converts to an integer
console.log(Number.parseInt('11ss22'));
console.log(Number.parseFloat('1.221ss22'));
console.log(Number.toString(44));

////////////////////////////////////////////////////////////////

//Controlling Loops

/* Example 1 */

//initializing before the for loop
let i= 0;

for(; i < 12; i++){ //the semicolon represents a "placeholder" for the initialized
    console.log(i);
    if(i === 7){
        break; //will exit the loop at 7, earlier than 12
    }
}
//7

for(let i = 0; i < 7; i++){
    if(i === 4){
        //will skip 4 and not console.log it to the terminal
        continue; //when continue executes, console.log(i) will not
    }
    console.log(`${i} printed number`);
}