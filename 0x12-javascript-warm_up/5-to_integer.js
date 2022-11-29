#!/usr/bin/node
const argv = process.argv;

const arg = Number(argv[2]);
if (String(arg) !== 'NaN') {
  console.log(`My number: ${arg}`);
} else {
  console.log('Not a number');
}
