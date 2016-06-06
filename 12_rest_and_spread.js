var rawArgs = process.argv.slice(2);
var arr = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') arr.push(+val);
  });
});

// write a function called `avg` here that calculates the average.
let avg = function(...args) {
  return args.reduce((a,b) => a + b) / args.length;
}
console.log(avg(...arr));
