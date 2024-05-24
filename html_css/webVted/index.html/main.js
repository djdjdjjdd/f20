// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

import { fileURLToPath } from "url";

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Prezzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};
/*
    const { menu, starterMenu: starters = [] } = restaurant;
    console.log(menu, starters);

    const arr = [7, 8, 9];
    const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
    console.log(badNewArr);

    const newArr = [1, 2, arr];
    console.log(newArr);
    console.log(1, 7, 8, 9);

    const newMenu=[...restaurant.mainMenu,'Gnocci'];
    console.log(newMenu);
*/
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// 2) Function
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers; i++) sum += numbers[i];
    console.log(sum);
}
add(2, 3);
add(4, 3, 3, 4);
add(2, 23, 4, 1, 3, 3,);
const x = [23, 5, 7];
add(...x);
//restaurant.order('mushrooms,'onion', 'olioves', 'spinach');
//restaurant.oderPizza('mushrooms');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('----AND----');
// định nghĩa method cho object
/*var name ='Javascript';
var price = 1000;
var course = {
    name,
    price,
    getName() {
        return name;
    }
};*/

console.log(cours.getName());
 // 3 địng nhĩa key cho object dưới dạng biến
var fieldName = 'new-name';
var fieldPrice = 'price';
const cours = {
    name: 'Javascript',
    [fieldName]: 'Javascript',
    [fileldPrice]: 1000
}
console.log(cours);