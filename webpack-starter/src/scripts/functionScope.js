//Function & Block Scopes
//variables that can be accessed globally and locally
/* Exercise 1 */
function startMovie(movieId){
    let message = 'starting film..';
}
startMovie(124);
//console.log(message); //Error message: message is not defined, its out of scope

/* Exercise 2 */
function startFilm(movieId){
    let message = 'starting film....';
    let pressPlay = function pushBttn(){
        console.log(message); //starting film...
        //will look for parent variable, and it found it above
    };
    pressPlay();
}
startFilm(2009);

/* Exercise 3 */
function startGame(gameId){
    let message = 'starting game....';//is in scope
    let pressPlay = function pushBttn(){
        let message = 'Override'; //does not print!! its out of scope - never gets changed!!
        //will look for parent variables to plug in
    };
    pressPlay();
    console.log(message); //starting game
}
startGame(2009);
////////////////////////////////////////////////////////////////
//Block Scopes

// block scope only works for let, to avoid overriding use let!!
let message = 'Outside';
if ('five' === 'five') {
    let message = 'Equal';
    console.log(message); //equal - local -temporarily overriding the outside variable
}
console.log(message); //outside - code block completes but we get string outside

////////////////////////////////////////////////////////////////
// Immediately Invoked a Function Expression
// IIFE
let penguinApp = (function() { //iffe pattern
    let penguinId = 345;
    console.log('this is a function!!');
    return{};
})(); //showing it's an expression
console.log(penguinApp);

////////////////////////////////////////////////////////////////

//Closure is a function and its context that is kept in memory
let app = (function() { //iffe pattern - this is the parent function 
    let penguinId = 'this penguin id!!';
    let getId = function(){ //child function gets executed and looks up variable penguinId
    
        return penguinId;
    };
        return {
            getId: getId // the variable app gets set to the return value of the iffe and it
            //includes a reference to the function getId
            //make sure you return a reference to the function
        };
})(); //showing it's an expression
console.log( app.getId());

////////////////////////////////////////////////////////////////

//this keyword = refers to function context
//this keyword works with objects - this keyword refers to the object
let z =  {
    cheeseId: 421,
    getId: function(prefix){
        console.log(this);
        return prefix + ' is ' + this.cheeseId; //argument prefix added when added apply
    }
};
console.timeLog( z.getId() ); //421

////////////////////////////////////////////////////////////////
// call & apply - working with the same function above
let newCheese = { cheeseId: 322};
console.log(z.getId.call(newCheese)); //322

console.log( z.getId.apply(newCheese, ['ID: '])); //apply accepts an array of arguments

let newFunction = z.getId.bind(newCheese = { cheeseId: 455}); //brand new function you use bind 
console.log(newFunction() + ' new??');



////////////////////////////////////////////////////////////////

//Arrow Functions

////////////////////////////////////////////////////////////////

//Default Parameters