/*
class Person{
    name = 'Max';

    constructor() {
        this.age = 30;
    }

    greet(){
        console.log('Hi, I am '+ this.name + ' and I am ' + this.age + ' years old.');
    }
}

const person = new Person();
person.greet();
*/

// ------------------------------------------------------------------------------

/*function Person(){
    this.age = 30;
    this.name = 'Max';
    this.greet = function(){
        console.log('Hi, I am '+ this.name + ' and I am ' + this.age + ' years old.');
    };
}

function Animal() {
    this.name = name;
}

const person = new Person();
console.log('personBefore:'); // Object()
console.log(person.__proto__); // Object()

Person.prototype = new Animal('human');
console.log('personAfter:'); // still Object()
console.log(person.__proto__); // still Object()

const person2 = new Person();
console.log("person2"); // Animal()
console.log(person2); // Animal()

/!*const person3 = new person2.__proto__.constructor();
console.log(person3);*!/*/


// ------------------------------------------------------------------------------

/*function Person() {
    this.name = 'Max';
    this.age = 30;
    this.say = function () {
        console.log('Hi, I am ' + this.age + ' years old.');
    };
}

// creating static method which instances won't have access to
Person.sayBye = () => console.log('Byeeeeeeeeeeeeeeeeeeeeeeeeee');
console.log(Person.prototype);
Person.sayBye();

const person = new Person();
console.log(person);
person.sayBye();*/

// ------------------------------------------------------------------------------

class Human {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hi my name is ' + this.name);
    }
}

class Student extends Human {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    //as named function
    takeExam1() {
        console.log('Student received grade ' + this.grade);
    }

    //as anonymous function
    takeExam2 = function () {
       console.log('Student received grade ' + this.grade);
    }

    //as anonymous arrow function
    takeExam3 = () => {
        console.log('Student received grade ' + this.grade);
    }
}

const student = new Student('George', 6);
console.log(student);
console.log(student.__proto__);
console.log(Student.prototype);

// ------------------------------------------------------------------------------

/*
const course = { //new Object
    title: 'JavaScript - The Complete Guide',
    rating: 5
}
console.log(Object.getPrototypeOf(course)); //same as course.__proto__ but the official way

// assigning new prototype BUT losing the other properties
Object.setPrototypeOf(course, {
    printRating: function () {
        console.log(`${this.rating}/5`);
    }
});
// course.printRating();
console.log(Object.getPrototypeOf(course)); //same as course.__proto__ but the official way

// assigning new prototype AND keeping the other properties
Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course), // taking the existing properties as an array and give them as arguments
    printRating: function () { //adding one more property
        console.log(`${this.rating}/5`);
    }
});
console.log(Object.getPrototypeOf(course)); //same as course.__proto__ but the official way
*/
