const prices: (number | string)[] = [1,2,3,4,5,6,7,8,9, '112'];
prices.push(10);
prices.push('654');

// tupla -> importa el orden
// const user: [string, number] = ['angeldev', 18];
let user: [string, number];
user = ['angeldev', 18];
user = ['luisdev', 22];

// user = [];
// user = ['angel'];
// user = ['angel', 13]; // El unico que no falla
// user = ['angel', 13, true];

const [ username, age ] = user;
console.log(username);
console.log(age);
