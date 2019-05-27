import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const demoQaUrl = 'https://demoqa.com/';

/**
* Scenario: Visit the Demo QA Website
*/
When('we visit the Demo QA website', () => {
  cy.visit(demoQaUrl);
});

Then('the Demo QA website should load', () => {
  cy.url()
    .should('eq', demoQaUrl)
});

/**
* Scenario: Visit the "Interactions" Page
*/
Given('we are viewing the Demo QA website', () => {
  cy.visit(demoQaUrl);
});

When('we select "Interactions"', () => {
  cy.get('a[title="Interactions"]')
    .click();
});

Then('the "Interactions" page should load', () => {
  cy.url()
    .should('eq', demoQaUrl + 'category/interactions/')
})
