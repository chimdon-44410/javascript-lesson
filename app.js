// Q1


let nickname = 'ともみ';
let age = '27歳';

let selfintrodaction =
  '私のニックネームは' + nickname + 'です。 年齢は' + age + 'です。';

console.log(selfintrodaction);



//Q2


let language1 = 'JavaScript';
let language2 = 'PHP';
let language3 = 'Ruby';
let language4 = 'Python';
let language5 = 'Go';


let templateliterals = `私の好きな言語は${language1}です。次は${language3}を勉強してみたいです。`;

console.log(templateliterals);



//Q3

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4

let playerList = [
  { name: 'John', age: 26, favorites: ['Card Game', 'Basket Ball', 'Programming'] },
  { name: 'Bob', age: 33, favorites: ['Tinder', 'The Legend of Zelda'] },
  { name: 'Michael', age: 22, favorites: ['Football', 'Smash Bros.'] },
];

let bob = playerList[1]
console.log(bob.favorites[1]);



//Q5
let john = (playerList[0].age);
let bob_ = (playerList[1].age);
let michael = (playerList[2].age);

let eachAge = [john, bob_, michael];

let sum = 0;

for (let i = 0; i < eachAge.length; i++) {
  sum += eachAge[i];
}
console.log(sum / eachAge.length);

//Q6
function Hello() {
  console.log('sayHello');
}
Hello();

let sayWorld = 'World';
console.log(sayWorld);

//Q7

// let user = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
//   birthday: '2000-09-27',
//   sayHello: 'Hello!'
// };

// console.log(user.sayHello);


//Q8

let calc = {
  add: function (x, y) {
    return (x + y);
  },

  subtract: function (x, y) {
    return (x - y);
  },

  multiply: function (x, y) {
    return (x * y);
  },

  divide: function (x, y) {
    return (x / y);
  }
};

console.log(calc.add(3, 4));
console.log(calc.subtract(30, 20));
console.log(calc.multiply(7, 7));
console.log(calc.divide(25, 5));

//Q9
function remainder(x, y) {
  return (x % y);
}

let x = 5;
let y = 3;
let z = remainder(x, y);

console.log( x + ' を ' +  y  +  ' で割った余りは' +  z  + 'です。');

//Q10
// スコープとは変数の有効範囲のことであり、
// function foo() {
//   let x = 1;
// }
// console.log(x);
// のxは{}の範囲内でないと変数が参照できないため範囲外にあるconsole.log(x);ではエラーが出てしまう。


//応用

//Q1

let random = Math.floor(Math.random()*10);

console.log(random);

//Q2


setTimeout(function() { console.log('Hello World!');}, 3000);

//Q3
let num = 3;

if(num > 0){
  console.log('num is greater than 0');
} else if (num < 0){
  console.log('num is less than 0');
} else if (num === 0){
  console.log('num is 0');
}

//Q4
let numbers = []
// for(;;)
for(let count = 0; count < 100; count){

  if(numbers >99)break;

  console.log(numbers);
  numbers++;

}

//Q5

let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) 
  {
    let item = mixed[i]
  // console.log(mixed[i]);
  // console.log(typeof mixed[i])

  if(typeof item === 'number' && item % 2 === 0) {
    console.log('even');
  }

  else if(typeof item == 'number' && item % 2 == 1) {
    console.log('odd');
  }

  else if (typeof item === 'string') {
    console.log('not number');
  }
}