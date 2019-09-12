//Classes and Modules!!
/* Classes give us a new syntax to create constructor functions, and Modules is a great way to organize our source code */

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
    cool.id = 123;
    console.log(cool.id);

////////////////////////////////////////////////////////////////

//Methods

/* Example 1 */

////////////////////////////////////////////////////////////////

//Inheritance

/* Example 1 */

////////////////////////////////////////////////////////////////

//Creating a module

/* Example 1 */
