#!/usr/bin/node
const argv = process.argv;
const size = Number(argv[2]);
if (String(size) === 'NaN') {
  console.log('Missing size');
}

let row = '';
for (let j = 0; j < size; j++) {
  row += 'X';
}
for (let i = 0; i < size; i++) {
  console.log(row);
}
