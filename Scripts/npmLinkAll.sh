#!/bin/bash
script_folder=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$script_folder"
cd ../Source/commands
npm link
cd ../core
npm link
cd ../queries
npm link
cd ../readmodels
npm link