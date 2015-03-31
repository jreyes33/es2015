export default
`let asyncCall = (timeout) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve('done!'), timeout));

let result = '';

asyncCall(1000)
.then((response) => {
  result += response;
  return asyncCall(2000);
})
.then((response) => {
  result += response;
  alert(result);
});`;
