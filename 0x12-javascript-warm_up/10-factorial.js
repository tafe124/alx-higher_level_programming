#!/usr/bin/node
const argv = process.argv;

function factorial (num) {
  if (!num || num <= 0) {
    return (1);
  }
  return (num * factorial(num - 1));
}

const arg = Number(argv[2]);
console.log(factorial(arg));
