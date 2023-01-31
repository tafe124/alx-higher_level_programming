#!/usr/bin/node
const request = require('request');
const argv = process.argv;

const baseUrl = 'https://swapi-api.hbtn.io/api/films/';
const url = baseUrl + argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const title = JSON.parse(body).title;
  console.log(title);
});
