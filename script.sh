#!/bin/bash
npm install
docker-compose up -d && docker exec -i mongodb sh -c 'mongoimport --jsonArray -c developers  -d mwc --drop' < ./app/models/developers_mwc22.json
