export default
`let repeated = [1, 2, 1, 1, 2, 3];
let unique = new Set(repeated);
console.log(unique.has(2));
console.log(unique.has(4));
console.log(Array.from(unique));`;
