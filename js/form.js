let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');

let form = document.getElementById('user-form');

let hisName = 'Michael';
let hisAction = {
    name: 'married',
    email: 'kdskkd'
};
let receiver = 'Chinwe';
let age = 18;

const person = {
    name: 'Michael',
    action: 'killed',
    thing: 'rat'
}

let mySentence = `${person.name} ${person.action} a ${person.thing}`;
console.log(mySentence);

// let sentence = 'I thought I heard that ' + hisName + ' ' +  hisAction + ' to ' + receiver + ' who is ' + age + ' years.';

let sentence = `I thought I heard that ${hisName} ${hisAction.name} to ${receiver} who is ${age} years.`;
console.log(sentence)

inputName.addEventListener('keyup', function(e) {
    console.log(e.target.value);
})
form.addEventListener('submit', showValues)

function showValues(e) {
    e.preventDefault();
    // console.log(inputName.value)
    alert(`Name: ${inputName.value} Email: ${inputEmail.value}`);
}

function scream() {
    console.log('Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
}

let alpha = 'abcdefghijklmnopqrs       tuvwxyz';
let length = alpha.length;
console.log(length);

let quote = 'I am a "quoted" string\'s';
console.log(quote);

let slicedQuote = quote.slice(7, 15);
console.log(slicedQuote);

let substrQuote = quote.substr(7);
console.log(substrQuote);

let newText = alpha.replace('abcdefghijklmnopqrs', 'A');
console.log(newText);
let upper = alpha.toUpperCase();
console.log(upper);

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

let x = 100 / "Apple";
console.log(isNaN(x));