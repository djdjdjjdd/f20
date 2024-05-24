const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-07-26T17:01:17.194Z",
        "2020-07-28T23:36:17.929Z",
        "2020-08-01T10:51:36.790Z",
      ],
      currency: "EUR",
      locale: "pt-PT",
};
const account2 = {
    owner: 'Jonas Schmedtmann2',
    movements: [200, 7450, -400, 3070, -6508, -30, 780, 130],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
      ],
      currency: "USD",
      locale: "en-US",
};
const account3 = {
    owner: 'Jonas Schmedtmann34',
    movements: [255, 46, -400, 3000, -650, -130, 70, 1300],
    interestRate: 0.7,
    pin: 3333,
};
const account4 = {
    owner: 'Jonas Schmedtmann77',
    movements: [200, 4507, -400, 300, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];

//

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTime = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form_btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan--amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatMovementDate = function (date, locale){
    const calcDaysPassed = (date1, date2) => 
        Math.abs(date2 - date1) / (1000 * 60 * 24 * 24);
    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);

    if (daysPassed === 0) return 'today';
    if (daysPassed === 1) return 'yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    else{
       // const day = `${date.getDate()}` .padStart(2, 0);
        //const month = `${date.getMonth() + 1}`.padStart(2, 0);

        //const year = date.getFullYear();
        //return `${day} / ${month} /${year}`;
        return new Intl.DateTimeFormat(locale).format(date);
    };
}

const formatCur = function(value, locale, currency){
    return new Intl.NumberFormat(locale, {
        style:'currency',
        currency: currency,
    }).format(value);
};

const displayMovements = function (acc, sort = true) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b)=>
    a - b
    ) : movements;
    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withrawal';
        const date = new Date(acc.movementsDates[i]);
        
        const displayDate = formatMovementDate(date, acc.locale);
        const formattedMov = new Intl.NumberFormat(date, acc.locale, {
            style: 'currency',
            currency:'USD',
        }).format(mov);
        const html = `
            <div class="movements__row">
                <div class='movements__type movements__type--${type}'>
                ${i + 1} ${type}
                </div>       
                <div class='movements__date'>${displayDate}</div>   
                <div class='movements__value'>${formattedMov}</div>  
            </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements);

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.forEach = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(account);
const updateUI = function (acc) {
    // display movement
    displayMovements(acc.movements);
    // display balance
    calcDisplayBalance(acc);

    // display summary
    calcDisplaySummary(acc);
}
console.log(accounts);
//
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    currentAccount = account.find(
        acc => acc.username === inputLoginUsername.value);
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        //Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0];
    } `;
        containerApp.style.opacity = 100;

        // clear input field
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        startLogOutTimer();

        updateUI(currentAccount);
        
    }
});
btnTransfer.addEventListener('click', function(e){
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value ='';

    if(
        amount > 0 &&
        ///
        receiverAcc &&
        currentAccount.balance >= amount  &&
        receiverAcc? .username !== currentAccount.username
    ){
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        currentAccount.movementsDates.push(new Date());
        receiverAcc.movementsDates.push(new Date());
        updateUI(currentAccount);
    }
});

// Experimenting 
const startLogOutTimer = function () {
     let time = 120;
        const timer = setInterval((function) => {
        const min = String(Math.trunc( time/ 60));
            const sec = String(time % 60);
            labelTime.textContent = min;
            time--;
            if(time === 0) {
                clearInterval(timer);
                labelWelcome.textContent = 'log in to get started';
                containerApp.style.opacity = 0;
            }
    },1000);

}
const restartLogOutTime = function () {
    setTimeout((function) => {

    })
}


const now = new Date();
const options = {
    hour:'numeric',
    minute:'numeric',
    dat:'numeric',
    month:'long',
    year:'numeric',
    weekday:'long',
}
labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);
btnLoan.addEventListener('click', function(e){
    e.preventDefault();
    const amounts = Number(inputLoanAmount.value);
    
    
    if (
        amount > 0 &&
        currentAccount.movements.some(mov => mov >= amount * 0.1) )
    {
        // add movements
        currentAccount.movements.push(amounts);
// add loan date
        currentAccount.movementsDates.push( new Date());
        updateUI(currentAccount);
    }
});
btnClose.addEventListener('click', function(e){
    e.preventDefault();
    
    if(
        inputCloseUsername.value === currentAccount.username
         &&
         Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
        console.log(index);
        //delete account
        accounts.splice(index, 1);
        // hide UI
        containerApp.style.opacity=0;
    }
    inputCloseUsername.value === inputClosePin.value ='';
});
let sorted = false;
btnSort.addEventListener('click', function(e){
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});
console.log(movements);
// some 
console.log(movements.some(mov => mov ===-130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// every 
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const owners = ['f','sfsf', 'sffs'];
console.log(owners.sort());
console.log(owners);
// number
console.log(movements);
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// movement.sort((a, b) => {
//  if (a>b) return 1;
//  if(a<b) return -1;
//});
//movements.sort((a, b) =>{
   // if (a>b) return 1;
    //if(a<b) return -1;
//}
//);
//console.log(movements);
movements.sort((a,b) => b - a);
console.log(movements);

//
x.fill(1,3,5);
console.log(x);
labelBalance.addEventListener('click', function(){
    const movementsUI = Array.from(
        document.querySelector('.movements__value'),
        el => Number(el.textContent.replace(''))
    );

    console.log(movementsUI);
    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov >  0)
    .reduce((sum, cur) => sum + cur, 0)

console.log(bankDepositSum);
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(numDeposits1000);

const {deposits, withrawals} = accounts 
    .flatMap(acc => acc.movements)
    .reduce(
        (sums, cur) => {
            //cur > 0 ? (sums.deposits += cur) : (sums.withrawals += cur);
            sums[cur > 0 ? 'deposits' : 'withrawals'] += cur;
            return sums;
            
        },
        {deposits: 0, withrawals: 0}
    );
console.log(deposits,withrawals);

const convertTitleCase = function(title){
    const expections = ['a', 'an ', 'the'];

    const titleCase = title 
        .toLowerCase() 
        .split() 
        .map(word => expections.includes(word) ? word : word[0]
                .toLowerCase() + word.slice(1)
        )
                .join(' ');
        ;
            return titleCase;
};
labelBalance.addEventListener('click', function(){
    [...document.querySelectorAll('.movements__row')].
    forEach(function(row, i){
        if(i % 2 === 0) row.style.backgroundColor = 'red';
    });
});

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

const now = new Date();
const day = `${now.getDate()}` .padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2,0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour} : ${min}`;

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => 
    console.log(`here is your pizza with ${ing1} and ${ing2}`),
    3000,
    ...ingredients
);
console.log('waiting...');

if ( ingredients.includes('spinach')) clearTimeout(pizzaTimer);