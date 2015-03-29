export default
`let addFive = x => x + 5;
let numbers = [3, 7, 11];

console.log(numbers.map(addFive));

numbers.forEach((x, i) => console.log(\`\${i}: \${x}\`));`;
