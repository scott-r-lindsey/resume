#!/bin/bash

# cd to here
cd "$(dirname "$0")"
cd www

python3 -m http.server 8000


