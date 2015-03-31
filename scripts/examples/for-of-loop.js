export default
`let cities = ['Cuenca', 'Loja', 'Guayaquil'];
for (let city of cities) {
  console.log(city);
}

for (let [index, city] of cities.entries()) {
  console.log(\`\${index + 1}: \${city}\`);
}`;
