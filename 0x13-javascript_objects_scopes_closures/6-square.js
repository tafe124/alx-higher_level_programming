#!/usr/bin/node
const SquareB = require('./5-square.js');

class Square extends SquareB {
  charPrint (value = 'X') {
    let row = '';
    for (let i = 0; i < this.width; i++) {
      row += value;
    }
    for (let i = 0; i < this.height; i++) {
      console.log(row);
    }
  }
}
module.exports = Square;
