# Magnolia-Acuminata
An automation testing repository using Cypress.io, Cypress-Cucumber-Preprocessor, and ES6.

## Why magnolia acuminata?
The magnolia acuminata is a species of tree known as the 'cucumber tree.' Since this repository utilizes Cypress.io and cucumber, I figured it would be fun to give the repository a proper name.

## Installation
Clone this repository, then enter the following command:

```
npm install
```

### Troubleshooting Installation
Should you install on Windows, be aware that a dependency (fsevents) will cause installation errors. To rectify these errors, run the following command:

```
npm install -f
```

This will force installation of the dependency.

## Running a Test
Once installed, run one of the following commands:

```
npm run test
```

This command will run the tests headlessly in the Elecrtron browser. A readout will be available in your terminal.

```
npx cypress open
```

This command will open the Cypress test runner. From here, you may select the feature file you would like to run (or select 'Run all specs'). Once selected, the feature will run in the browser.
