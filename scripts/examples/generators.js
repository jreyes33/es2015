export default
`function* oddsGenerator() {
  let number = 0;
  while (true) {
    if (++number % 2 !== 0) {
      yield number;
    }
  }
}
let odds = oddsGenerator();
console.log(odds.next());
console.log(odds.next());
console.log(odds.next());

function* namesGenerator() {
  yield 'Alice';
  yield 'Bob';
  yield 'Eve';
}
let names = namesGenerator();
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
for (let name of namesGenerator()) {
  console.log(name);
}`;
