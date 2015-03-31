export default
`const FIRST_SYMBOL = Symbol();
const SECOND_SYMBOL = Symbol();

let obj = {
  [FIRST_SYMBOL]: 'Some value'
};

console.log(obj[FIRST_SYMBOL]);
console.log(obj[SECOND_SYMBOL]);
console.log(FIRST_SYMBOL === SECOND_SYMBOL);
console.log(Symbol.for('a') === Symbol.for('a'));`;
