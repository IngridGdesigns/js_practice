/*Rest Parameter examples*/

function sendCookies(...allCookieIds) {
    allCookieIds.forEach( id =>  console.log(id));
}

sendCookies(24, 32, 12, 4);
//expected output: 24, 32, 12, 4


//Rest parameter must be the last parameter on the list
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

////////////////////////////////////////////////////////////////

//Destructuring Objects

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

///////////////////////////

console.log(Number.parseInt('33')); //converts to an integer
console.log(Number.parseInt('11ss22'));
console.log(Number.parseFloat('1.221ss22'));