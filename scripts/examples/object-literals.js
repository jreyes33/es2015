export default
`let random = (max) =>
  Math.floor(Math.random() * max);

let isHuman = true;
let tricia = {
  name: 'Tricia',
  isHuman,
  greet() {
    return \`Hi, I'am \${this.name}\`;
  },
  [\`prop\${random(5)}\`]: 'So random'
};
console.log(tricia);
console.log(tricia.greet());

let $scope = 'Some scope';
let $http = 'Some http';
let args = {$scope, $http};
console.log(args);`;
