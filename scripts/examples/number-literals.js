export default
`let x = 0b0110;
let y = 0b1001;
console.log(x | y);
console.log((x | y).toString(2));

let a = 0o777;
let b = 0o022;
console.log(a - b);
console.log((a - b).toString(8));

// Oct31 === Dec25
console.log(0o31 === 25);`;
