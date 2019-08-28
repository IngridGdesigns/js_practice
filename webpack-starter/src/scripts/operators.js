
//Operators
////////////////////////////////////////////////////////////////

//Equality Operators

/* Example 1 */
//the double equal will try to convert a string to 
//an integer, could result in bugs in the code
if(44 == '44'){
    console.log('gotcha, it converted!');
} else {
    console.log('not the same!!');
}
//output: gotcha, it converted!


/* Example 2 */
if(22 === '22'){
    console.log('gotcha, it converted!');
} else {
    console.log('not the same!!');
}

/*Example 3 */
let id = 124;
console.log(id != '124'); //false, it was converted (hinting at 'true)
console.log(id !== '124'); //true

////////////////////////////////////////////////////////////////

//Unary Operators

/* Example 1 */
let year = 1993;
console.log(year++); //it actually adds it after
console.log(year);//this will print 1994

/* Example 2 */
let newYear = "1892";
console.log(-newYear); //string is positive
console.log(newYear);//this will print 1994

////////////////////////////////////////////////////////////////

//Logical Operators
/* Example 1 */
if (4 > 3 && 2 < 5){
    console.log('yeah!');
} 

/* Example 2 */
let sunlight = null;
if(!sunlight){
    sunlight = 'darkness';
    console.log(sunlight);
}
//darkness

////////////////////////////////////////////////////////////////

//Relational Operator
// all capital letters come before lowercase letters
// in order to get around this convert all your letters to Uppercase or Lowercase
console.log('Zoo' > 'alphabet');
//false


////////////////////////////////////////////////////////////////

//Ternary or Conditional Operator
//          (condition) ? true-Value : false-Value
console.log( 5 > 44 ? 'yes' : 'no');
//no

////////////////////////////////////////////////////////////////

//Operator precedence
//the order in which operators get executed
let mdnTable = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence';
//()
let parenthesis = ('Parenthesis will have the highest precedence!!');
let multiplication = ('multiplication will always execute first'(4 * 5));
let logical = ('Logical && will take precedence over OR');