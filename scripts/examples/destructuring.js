export default
`let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

let [c, d] = [3, 4, 5];
console.log(c);
console.log(d);

let [, e] = [4, 5];
console.log(e);

let {name, age} = {id: 1, age: 42, name: 'Arthur'};
console.log(name);
console.log(age);`;
