#!/bin/bash
# a script to post json
curl -s "$1" -X POST -H 'Content-Type: application/json' -d @"$2"
