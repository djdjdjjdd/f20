// const Person = function (firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

// };
// const jonas = new Person('joans', 1991);
// console.log(jonas);
// const matilda = new Person('matida', 2017);
// const jack = new Person('jack', 1975);
// console.log(matilda, jack);

// const jay = 'jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);
// // prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);

// };
// jonas.calcAge();
// matilda.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda))

// //
// Person.prototype.species = 'home sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));

// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 5, 6, 73, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };

// console.log(arr.unique());




// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;


// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;

// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
// DATA CAR 1: 'BMW' going at 120 km/h


//  DATA CAR 2: 'Mercedes' going at 95 km/h

// const car = function (make, speed) {
//     this.make = make,
//     this.speed = speed;
// };

// const BMW = new car('BWD', 120)
// const Mercedes = new car('Mercedes', 95)
// console.log(BMW, Mercedes);

// car.prototype.accelerate = function() {
//     this.speed += 10,
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// car.prototype.brake = function() {
//     this.speed -= 10,
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// BMW.accelerate();
// BMW.brake();
// Mercedes.accelerate();
// Mercedes.brake();

// class declaration
// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     // methods wills be added to .prototype property


//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
//     greet(){
//         console.log(`hey ${this.firstName}`)
//     }

//     get age(){
//         return 2037 - this.birthYear;
//     }
// }

// const jessica = new PersonCl('Jessica');
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.__proto__===PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);

// };
// jessica.greet();

// // 1. classes are  not hoisted
// // 2. class are first-class citizes
// // 3. classes are executed in strict mode

// const account = {
//     owner: 'Jonas',
//     movements : [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest() {
//         this.movements.push(mov )
//     }
// }

// const steven  = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2022;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1979);

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;

// };

// Student.prototype.introduce = function () {
//     console.log(`my name is ${this.firstName} and I study ${this.course}`);

// }

// const mike = new Student('mike', 2020, 'computer')
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.dir(Student.prototype.constructor);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;

// console.dir(Student.prototype.constructor);

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);
//         this.course = course;
//     }

//     introduce() {
//         console.log(`my name is ${this.fullName} and i study ${this.course}`);
//     }
//     calcAge() {
//         console.log(`i am ${2037 - this.birthYear} years old, but as a student i feel more like ${2037 - this.birthYear + 10}`);
//     }
// }

// //const martha = new StudentCl('martha jones', 2012, 'computer');
// martha.introduce();
// martha.calcAge();


// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { name: 'john', age: 30 };
//         callback(data);
//     }, 2000)
// }
// function processData(data) {
//     console.log('du lieu nhan duoc :', data)
// }
// fetchData(processData);

// // staric method

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);
//         this.course = course;
//     }

//     introduce() {
//         console.log(`my name is${this.fullName}  and I study ${this.course}`);
//     }

//     calcAge() {
//         console.log(
//             `i am${2037 - this.birthYear}`
//         );
//     }

// }

// const martha = new StudentCl('martha Jones', 2012, 'computer science')
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;

//     },

// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };

// StudentProto.introduce = function() {
//     console.log(`my name is ${this.fullName} and I study ${this.course}`)
// }

// const jay = Object.create(StudentProto);
// jay.init('jay', 2010, 'computer science');
// jay.introduce();
// jay.calcAge();

// // 1. Re-create challenge 1, but this time using an ES6

// // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6); 10 
// //3. Add a setter called 'speedUS' which sets the

// // current speed in mi/h (but converts it to km/h before

// // class; 39 storing the value, by multiplying the input by 1.6); 
// //1 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// // 2

// // 3

// // DATA CAR 1-


// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make} is going at ${this.speed} km/h`)
//     }
//     brake() {
//         this.speed -= 5;
//         console.log(`${this.make} is going at ${this.speed} km/h`)
//     }

//     get speedUS() {
//         return this.speed / 1.6;
//     }
//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }
// const ford = new CarCl('ford', 120);
// console.log(ford.speedUS);
// ford.accelerate()
class Account {
    //public fields(instances)
    locale = navigator.language;
    // private fields
    #movements = []
    constructor(owner, currency, pin){
        this.owner=owner,
       //this.#movements = [],
        // this.locale = navigator.language,
        // protected property
        this._pin=pin,
        console.log(`thank for opening an account, ${owner}`);
    }


    // 3) public method
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push (val);
    }
    withdraw(val) {
        this.deposit(-val);
    }
    

    requestLoan(val) {
        if(this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`loan approved`);
        }
    }

    // 4) private method

    #approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('jonas', 'euro', 1111);

// acc1.#movements.push(250);
// acc1.#movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//acc1.approveLoan(1000);
console.log(acc1);
console.log(acc1.pin);

console.log(acc1.getMovements());

//console.log(acc1.#movements)