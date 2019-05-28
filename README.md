# Magnolia-Acuminata
An automation testing repository using Cypress.io, Cypress-Cucumber-Preprocessor, and ES6.

## Why magnolia acuminata?
The magnolia acuminata is a species of tree known as the 'cucumber tree.' Since this repository utilizes Cypress.io and cucumber, I figured it would be fun to give the repository a proper name.

## Installation
Clone this repository, then enter the following command:

```
npm install -f
```

We use force install due to the 'fsevents' dependency creating install errors on Windows. Since 'fsevents' is not supported on Windows, the dependency will be considered optional and will be skipped without the force tag. This will result in test failures.

## Running a Test
Once installed, run one of the following commands:

```
npm run test
```

This command will run the tests through Chrome. The test readout will be available in your terminal.

```
npm run test-headless
```

Use this to run tests headlessly with Electron browser. A test readout will print to your terminal.

```
npm run test-docker
```

This will run tests in a docker container.

```
npm run test-ui
```

This command runs the tests using the Cypress test runner UI. Users may select the browser (Chrome or Electron), then the spec. Should you desire to run a complete test run, select 'Run all specs' from the UI. A test readout will be available in the left-hand margin of the UI.
