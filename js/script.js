// String, Boolean, Arrays, Objects, Numbers, undefined, null
let a = "bag";

// Boolean => true or false
console.log(2 === "2")

//Arrays

let cars = ["Spider", "Bugatti", "Volvo", "Ford"]
console.log(cars[3])

// Object

let Goodness = {
    sex: "Female",
    height: 4.5,
    complexion: 'ebony',
    state: "Osun",
    hobby: "Watching Nigerian Movies"
}

console.log(typeof cars)

// Number 
let someNum = 1
someNum = 12e-3
console.log(someNum)

function sayHello(person) {
    alert('Hello ' + person)
}

sayHello('James')
sayHello('Samuel')

function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }

  console.log(myFunction(2, 2))


 document.querySelector('#demo').innerHTML = 'ballon'


 const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName())