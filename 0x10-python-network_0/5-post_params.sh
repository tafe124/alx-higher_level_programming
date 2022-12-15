#!/bin/bash
# sends a request to that URL, and displays the size of the body of the response
curl -Lsd "email=hr@holbertonschool.com&subject=I will always be here for PLD" -H "X-HolbertonSchool-User-Id: 98" -X 'POST' "$1"

