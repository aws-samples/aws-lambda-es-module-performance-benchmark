#!/bin/bash

$(npm bin)/artillery run --config config.yaml scenarios/commonjs.yaml

read -n 1 -s -r -p "Press any key to continue"
