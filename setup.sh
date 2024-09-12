#!/bin/bash

cd web
echo "Running npm install..."
npm install
echo "npm install done..."
cd ...
echo "Starting Docker containers..."
docker compose up -d
echo "Done!"
