const numbers = [1, 55, 88, 24, 6, 8, 4, 25, 36, 14, 5, 8, 1, 4, 5, 55, 4, 5, 2, 15, 4, 5, 4, 5, 4, 54, 5111, 1111, 11, 111, 5, 5, 5, 8, 8, 8,];


const maxNumbers = numbers.filter(number => number > 100);

const sum = maxNumbers.join('');

console.log(maxNumbers);

console.log(sum);
