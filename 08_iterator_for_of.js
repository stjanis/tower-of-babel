const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let number = 1;
    return {
      next() {
        let value = number;
        if( value <= max ) {
          if( value % 15 === 0 ) {
            value = 'FizzBuzz';
          } else if( value % 3 === 0 ) {
            value = 'Fizz';
          } else if( value % 5 === 0 ) {
            value = 'Buzz';
          }
          number++;
          return { done: false, value: value }
        };
        return { done: true };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}
