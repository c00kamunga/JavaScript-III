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
"use strict";
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

function Being(tasty){
    this.tasty = tasty;
    this.eat = function(){
        console.log(`This human loves to eat ${this.tasty}.`);
    }
}
const human = new Being("burgers");
human.eat();













// Principle 4

// code example for Explicit Binding

const joseph = {
    name: "joseph"
}

const david = {
    name: "david"
}

const skills = ["burgers", "tacos", "pizza"];
function introduce(food1, food2, food3){
    "use strict";
    return `Hi my name is ${this.name} and I like ${food1}, ${food2}, and ${food3}.`;
}

console.log(introduce.apply(joseph,skills));
console.log(introduce.apply(david,skills));