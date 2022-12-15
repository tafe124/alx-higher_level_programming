#!/bin/bash
# Script to make the server respond with "You got me!"
curl -sL 0.0.0.0:5000/catch_me -X PUT -H "Origin: You got me!"
