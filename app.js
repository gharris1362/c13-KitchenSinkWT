// my name
let myName = 'Garrett';

console.log(myName);


//number of states
const numOfStates = 50;

console.log(numOfStates);


//adds 5 and 4
let sum = 5 + 4;

console.log(sum)

function sayHello() {
    console.log('Hello World')
}

console.log(' ')

sayHello();

console.log(' ')

function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", You arent old enough to view this page!")
    } else {
        console.log("Welcome " + name)
    };
};

checkAge("Garrett", 20);
checkAge('Charles', 21);
checkAge("Abby", 27);
checkAge("James", 18)
checkAge("John", 17)

console.log(' ')

let favVeg = ["Brussels", "leek", "Broccoli", "Fruit"];

for (let i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i])
};

// let i = 0

// while ( i < favVeg.length) {
//     console.log(favVeg[i])
//     i++
// }


// function sayHi(word) {
// console.log(word)
// }
// sayHi(21)


let pet = {
    name: "HayHay",
    breed: 'cat'
};

let person = {
    name: "Michael",
    age: 23
}

console.log(pet.name, pet.breed);

let personArray = [
    {
        name: "Garrett",
        age: 21
    },
    {
        name: "Charles",
        age: 30
    },
    {
        name: "Abby",
        age: 17
    },
    {
        name: "James",
        age: 15
    },
    person
];

console.log(' ')

for (let i = 0; i < personArray.length; i++) {
    checkAge(personArray[i].name, personArray[i].age)
}


console.log(' ');


function getLength(word) {
   if (word.length % 2 == 0) {
       console.log("The World is Nice and Even!")
   } else {
       console.log("The World is an Odd Place")
   };
};

getLength('Hello World');
getLength('HelloWorld');