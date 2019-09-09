//Promises!!
/* Classes give us a new syntax to create constructor functions, and Modules is a great way 
to organize our source code */


// Errors in Javascript
// We want our code to handle it gracefully
/* Example 1 */ 

// let coffee = newCofe;
// console.log('wow.... '); //will get an error

////////////////////////////////////////////////////////////////


// Errors Handling Using try and catch
/* Example 1 */

try{
    let coffee = newCoffee;
} catch(error){
    console.log('This is the error: ', error); 
    //This is the error:  ReferenceError: newCoffee is not defined
}
console.log('the error was caught') //output: the error was caught
//our catch block catches the error and continues as usual


////////////////////////////////////////////////////////////////


// finally block always executes
/* Example 1 */

try {
    let cappuchinno = newDrink;
}
catch(err) {
    console.log('Finally example, error caught: ', err)
    //Finally example, error caught:  ReferenceError: newDrink is not defined
}
finally {
    console.log('This always executes'); // This always executes
}

////////////////////////////////////////////////////////////////


// Developer Defined erros
/* Example 1 */

////////////////////////////////////////////////////////////////


// Creating a promise
//hold for a value, the promise will be notified if we have a value to work with
/* Example 1 */

////////////////////////////////////////////////////////////////


// Setting a promise

/* Example 1 */