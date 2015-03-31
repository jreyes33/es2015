export default
`let numbers = [1, 2, 3, 4];

console.log([for (n of numbers) n * 5]);
console.log([for (n of numbers) if (n < 3) n * 5]);

console.log([for (head of ['a', 'b', 'c'])
             for (tail of ['x', 'y'])
             head + tail]);`;
