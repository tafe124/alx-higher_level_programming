#!/usr/bin/node
const argv = process.argv;

let secondLargest = 0; let largest = Number(argv[2]);
for (let i = 3; i < argv.length; i++) {
  if (Number(argv[i]) > largest) {
    secondLargest = largest;
    largest = Number(argv[i]);
  } else if (Number(argv[i]) > secondLargest) {
    secondLargest = Number(argv[i]);
  }
}
console.log(secondLargest);
