// Practice Problem 1 
// i) {Write an arrow function what will take 3 perameter and return multiply}

const multiply = (x, y ) => x * y;
console.log(multiply(3,4));

// ii) {Write three sentences in three lines}

const lines = `I am web developer.
I love to code.
I love biriyani`

console.log(lines);

// iii) {write a arrow function with default perameter}

const fullName = (firstName, lastName = 'Rahman') => `${firstName} ${lastName}`

console.log(fullName('Moshiur'));