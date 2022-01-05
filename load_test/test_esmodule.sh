#!/bin/bash

$(npm bin)/artillery run --config config.yaml scenarios/esmodule.yaml

read -n 1 -s -r -p "Press any key to continue"
