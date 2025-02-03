class Person{
    constructor(title){
        this.title = title;
        console.log(this);
    }

    baseWhoAmI(){
        console.log(`Base class: ${this instanceof Person}`);
    }
}

class Student extends Person{
    constructor(title, age){
        super(title);
        this.age = age;
    }

    childWhoAmI(){
        console.log(`Child class: ${this instanceof Student}`);
    }
}

const student1 = new Student('George', 30);
student1.baseWhoAmI();
student1.childWhoAmI();
