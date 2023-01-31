#!/usr/bin/node
const argv = process.argv;
const request = require('request');
const url = argv[2];

function get (obj, key, defaultValue) {
  const value = obj[key];
  return (typeof value !== 'undefined') ? value : defaultValue;
}

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const tasks = JSON.parse(body);
  const userTask = {};
  for (const task of tasks) {
    if (task.completed) {
      const id = task.userId;
      userTask[id] = get(userTask, id, 0) + 1;
    }
  }
  console.log(userTask);
});
