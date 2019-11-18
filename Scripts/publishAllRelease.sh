#!/bin/bash
script_folder=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$script_folder"
cd ../Source/commands
npm publish
cd ../core
npm publish
cd ../queries
npm publish
cd ../readmodels
npm publish