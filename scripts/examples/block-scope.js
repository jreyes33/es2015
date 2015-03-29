export default
`function tryLet() {
  var x = 10;
  if (true) {
    let y = 5;
  }
  console.log(x);
  console.log(y);
}

tryLet();`;
