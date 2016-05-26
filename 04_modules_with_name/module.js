export const PI = 3.141592;

let _sqrt = (s, x, last) => x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;


export let sqrt = (s) => _sqrt(s, s/2.0, 0.0);
export let square = (x) => x * x;
