
// lerna-module2/lib/lerna-module2.js
const lernaModule1 = require('lerna-module1');
module.exports = lernaModule2;
function lernaModule2() {
  console.log('lerna-module2');
  console.log('123');
}
lernaModule1();
lernaModule2();