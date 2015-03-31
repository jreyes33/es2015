export default
`let product = (...numbers) =>
  numbers.reduce((prev, current) => prev * current);

console.log(product(1, 2, 3, 4));

let printParams = (first, second, ...rest) => {
  console.log(first);
  console.log(second);
  console.log(rest);
};

printParams(1, 2);
printParams(1, 2, 3, 4, 5);`;
