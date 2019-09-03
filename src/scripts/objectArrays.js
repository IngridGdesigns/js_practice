//Constructor Function is used to instantiate objects


/* Example 1 */
//primary way to create objects using functions
function Cat(id) {
    this.catId = id; //this stores the property id
    console.log(this); //this keyword access the content of the object
}

let kitty = new Cat('meeoooww'); //brand new empty objects
console.log(kitty); //Cat { catId: 'meeoooww' }

////////////////////////////////////////////////////////////////

//Prototypes - basics

/* Example 1 */
function Bird(song){
    this.birdSong = song; //consturctor function is simple
}

Bird.prototype.sing = function(){ //we can add methods directly on prototype
    console.log('The bird sings: ' + this.birdSong);
};

let parrot = new Bird('lalalalalLAAAA');
parrot.sing();

////////////////////////////////////////////////////////////////

//

/* Example  */

////////////////////////////////////////////////////////////////

//

/* Example  */

////////////////////////////////////////////////////////////////

//

/* Example  */