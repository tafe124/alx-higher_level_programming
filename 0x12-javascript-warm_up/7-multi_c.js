#!/usr/bin/node
const argv = process.argv;
const counter = Number(argv[2]);
if (String(counter) === 'NaN') {
  console.log('Missing number of occurrences');
}
for (let i = 0; i < counter; i++) {
  console.log('C is fun');
}
