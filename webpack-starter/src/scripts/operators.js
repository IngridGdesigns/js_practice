
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
console.log(id != '124'); //false, it will convert
console.log(id !== '124'); //true