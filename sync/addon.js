let addon = require('./build/Debug/addon');

var i = 0;

setInterval(() => {
  console.log(new Date(), i++);
}, 500);

setTimeout(process.exit, 5000);

console.log(new Date(), 'start');
addon(msg => {
  console.log(new Date(), msg);
  console.log(new Date(), 'done');
});
console.log(new Date(), 'after');
