export default
`class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(this.name + ' walked!');
  }
}

class Amphibian extends Animal {
  swim() {
    console.log(this.name + ' swam!');
  }
}

let kermit = new Amphibian('Kermit');
kermit.walk();
kermit.swim();

console.log(kermit.constructor.name);
console.log(Object.getPrototypeOf(kermit.constructor).name);`;
