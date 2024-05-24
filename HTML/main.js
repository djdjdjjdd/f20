let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName='Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);


const jessica2 = {
    firstName:'Jessica',
    lastName:'williams',
    age: 27,
    family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'David';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('john');

console.log('before marriage:', jessica2);
console.log('after marriage:', jessicaCopy)
