const align = require('../index.js');

console.log(align('test', 20, 'center', ' '));
console.log(align('test', 20, 'left', ' '));
console.log(align('test', 20, 'right', ' '));
console.log(align('test', 20, '', ' '));
console.log(align('test', 20, 'center', '_'));
console.log(align('test', 20, 'left', '_'));
console.log(align('test', 20, 'right', '_'));
console.log(align('test', 20, 'center', '*'));
console.log(align('test', 20, 'left', '*'));
console.log(align('test', 20, 'right', '*'));