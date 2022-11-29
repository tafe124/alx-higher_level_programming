#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let nbOccurrence = 0;
  for (const ele of list) {
    if (ele === searchElement) {
      nbOccurrence += 1;
    }
  }
  return nbOccurrence;
};
