#!/usr/bin/env bash

function run_tests() {

  # Remove the results from previous test runs
  rm -rf ./output/ || true

  docker pull cypress/browsers:latest

  # Build a new docker image
  docker build -t magnolia-acuminata .
  docker stop magnolia-acuminata-tester || true && docker rm magnolia-acuminata-tester || true

  # Run the docker image
  docker run --ipc=host --name magnolia-acuminata-tester magnolia-acuminata

  # Copy the results once the run is finished
  docker cp magnolia-acuminata-tester:/usr/src/app/cypress/output .
  docker rm magnolia-acuminata-tester
}

run_tests
