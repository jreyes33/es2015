export default
`function sum(n, acc = 0) {
    if (n === 0) {
      return acc;
    }
    return sum(n - 1, acc + n);
}

console.log(sum(300000));`;
