#!/usr/bin/node
const argv = process.argv;
const fs = require('fs');
const request = require('request');
const url = argv[2];
const fileName = argv[3];

request.get(url).pipe(fs.createWriteStream(fileName, 'utf-8'));
