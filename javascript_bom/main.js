// window object - global object
console.log(this, window);
console.log(window.document.getElementsByTagName('h1'));

// screen
console.log(screen.width);
console.log(screen.availWidth);
console.log(screen.height);
console.log(screen.availHeight);
// location
console.log(location.href);
//

// popup alert
// alert
// confirm
//if (confirm('test')) {
    //console.log('confirmed');
//} else {
    //console.log('cancel');
//}

// prompt
let person = prompt('test');
console.log(person);
const arr = [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7));
// emprty arrays + fill method
const x = new Array(7);
console.log(x);
//
x.fill(1,3,5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

const y = Array.from({length:7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (indedd, i) => i + 1);
console.log(z);