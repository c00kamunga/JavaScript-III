/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function hello(greeting){
console.log(this);
return `I am saying ${greeting}.`
}
console.log(hello('hello'));




// Principle 2

// code example for Implicit Binding

const bar = {
    name: "bar",
    likes: "video games",
    food: "a lot of food",
    does: function(){
        return `Hi my name is ${this.name}, I like to play ${this.likes} and eat ${this.food}.`
    }
}
console.log(bar.does())




// Principle 3

// code example for New Binding










// Principle 4

// code example for Explicit Binding