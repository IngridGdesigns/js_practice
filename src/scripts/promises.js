const fetch = require('node-fetch');

//Promises!!
/* Classes give us a new syntax to create constructor functions, and Modules is a great way 
to organize our source code */


// Errors in Javascript
// We want our code to handle it gracefully
/* Example 1 */ 

// let soda = newSoda;
// console.log('wow.... '); //will get an error

////////////////////////////////////////////////////////////////


// Errors Handling Using try and catch

// place .catch exactly where you want it to handle your errors
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
/* 
finally is a good handler for performing cleanup, e.g. stopping our loading indicators, 
as they are not needed anymore, no matter what the outcome is. 

A finally is like then but with two distinct differences
1 - a finally handler has no arguments, so we dont know if the promise was successful or not
2 - a finally handler passes through results and errors to the next handler
3 - finally is not meant to process a promise result, so it can be passed through a catch
*/

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


// Developer Defined errors
/* Sometimes its better to define your erros*/
/* Example 1 */

try {
    cookie = ' cookie';
    throw new Error('my custom error handler');
}
catch(err) { // throw new Error string gets passed to error here in catch
    console.log('error caught: ', err)
    //Finally example, error caught:  ReferenceError: newDrink is not defined
}
finally {
    console.log('always executes'); // This always executes
}


////////////////////////////////////////////////////////////////


// Creating a promise

/*  Promises are designed to work with asynchronous javascript, (timer or http calls)promise is a temp holder 
//hold for a value, that you will retrieve once the asyn operation completes. Promise to actually get a value back
or an error.
*/
/* Example 1 */
let promise = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'someValue');
    }
);
console.log(promise); //only creating a promise, we are not working with it to get some value return by the promise


 /*Example 2 */
 //promise.all - Promise.all takes an array of promises and returns a new promise. Great use to 
 // get urls, json
 let promise4 = 'excellent';
 let promise5 = 'promise practice'

 let promisePractice = Promise.all([promise4, promise5]).then(console.log(promise4, promise5));

 //if one promise fails in promise.all, it will completely ignore the ones that passed. 

/* Example 3 */
let urls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3'
  ];
  
  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));
  console.log(requests) //pending requests
  
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => console.log(`${response.url}: ${response.status}`))
    );
  



////////////////////////////////////////////////////////////////


// Setting a promise
// when we do get a value of the promise

/* Example 1 */
let promise2 = new Promise(
    function(resolve, reject){
    setTimeout(resolve, 100, 'a cool value');
    }
);
// To actually consume the value returned when the 
// promise fulfills, since it is returning a promise, we could use a .then() block:
promise.then( //built in promise function to get value from promise
    //takes two arguments.
    value => console.log('fulfilled: ' + value), // settling the promise2 
    error => console.log('rejected ' + error )
);

/// 
/* 
If a .then (or catch/finally, doesn’t matter) handler returns a promise, 
the rest of the chain waits until it settles. When it does, its result 
(or error) is passed further.
*/

/////////
//So the async keyword is added to functions to tell them to return a promise rather 
// than directly returning the value.
function hi() { console.log('hi') };
hi();

async function goodbye() { console.log("goodbye") };
goodbye() //returns a promise - promise pending


//.then consumes the value returned as promise is fulfilled
async function hola() { return "hola" };

hola().then((value) => console.log(value))

// Async functions turn any function to a promise
async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

async function fetchUserAndRepos(handle) {
    const [user, repos] = await Promise.all([
        fetchFromGitHub(`/users/${handle}`),
        fetchFromGitHub(`/users/${handle}/repos`)
    ]);

    console.log(user.name);
    console.log(`${repos.length} repos`);
}

fetchUserAndRepos("mariusschulz");