#!/usr/bin/node
const request = require('request');
const argv = process.argv;

const url = argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`code: ${response.statusCode}`);
});
