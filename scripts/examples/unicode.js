export default
`let isAnimal = (emojo) =>
  '🐀'.codePointAt(0) <= emojo.codePointAt(0) &&
  emojo.codePointAt(0) <= '🐼'.codePointAt(0);

let emoji = ['🐶', '👻', '🐸', '🐻', '💩', '🐳'];
let animals = [for (e of emoji) if (isAnimal(e)) e];
console.log(animals);`;
