//Classes and Modules!!
/* Classes give us a new syntax to create constructor functions, and Modules is a great
// way to organize our source code */

/* Example 1 */
//Class Basics 
//class keyword to create a class by convention the first letter is in uppercase

class Beverage {
//instantiating a class
    
};
let water = new Beverage();
console.log(water);
////////////////////////////////////////////////////////////////

//Constructors and Properties
//a constructor is a function that gets executed when a new instance
//of an object gets created

/* Example 1 */
class Temperature {
    //instantiating a class
        constructor(id){
            this.id = id; //this keyword is needed
        }
    };
    let cool = new Temperature('cool');
    cool.id = 123; //changing id directly
    console.log(cool.id);

////////////////////////////////////////////////////////////////

//Methods

/* Example 1 */
class Dessert {
    //instantiating a class
        constructor(id){
            this.id = id; 
        }
        //methods are objects that exist in the class
        identify(sugar) {
            return `Flan id: ${this.id}, has ${sugar}` //also uses this keyword too
        // Flan id: 456, has high sugar levels
        }
    };
    let flan = new Dessert(456);
   
    console.log(flan.identify('high sugar levels'));

////////////////////////////////////////////////////////////////

//Inheritance
// DRY - dont duplicate your code

/* Example 1 */
class Nature {
    constructor() {
        this.type = 'organic'; //property accessible to Rainforest
    }
    start() {
        return `Starting: ${this.type}`;
    }
}

class Rainforest extends Nature {
//no regular constructor can be called  only super
    constructor(){
        super(); //refers back to the construcgtor in Nature, the super class
    }
    //start method
    start(){
        return 'Beautiful place'
    }
}

let jungle = new Rainforest();
console.log(jungle.type + ' : ' + jungle.start()) //outputs organic - it inherited from Nature

////////////////////////////////////////////////////////////////

//Creating a module

/* Example 1 */
