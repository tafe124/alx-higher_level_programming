#!/usr/bin/node

exports.esrever = function (list) {
  const length = list.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    const tmp = list[i];
    list[i] = list[length - i - 1];
    list[length - i - 1] = tmp;
  }
  return list;
};
