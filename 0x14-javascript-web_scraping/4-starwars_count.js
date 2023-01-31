#!/usr/bin/node
const request = require('request');
const argv = process.argv;

const url = argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const results = JSON.parse(body).results;
    let count = 0;
    for (const result of results) {
      const characters = result.characters;

      for (const character of characters) {
        const array = character.split('/');
        const length = array.length;
        if (array[length - 2] === '18') {
          count++;
        }
      }
    }
    console.log(count);
  }
});
