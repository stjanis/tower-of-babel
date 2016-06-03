let inputs = process.argv.slice(2);
let result = inputs.map((x) => x[0]).reduce((x, y) => x += y);
console.log(result);
