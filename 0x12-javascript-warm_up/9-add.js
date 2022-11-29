#!/usr/bin/node
const argv = process.argv;
function add (a, b) {
  console.log(a + b);
}
const a = Number(argv[2]);
const b = Number(argv[3]);
add(a, b);
