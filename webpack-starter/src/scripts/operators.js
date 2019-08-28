
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
console.log(-newYear); //it actually adds it after
console.log(newYear);//this will print 1994