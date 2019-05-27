import {
  Given,
  When,
  Then
} from 'cypress-cucumber-preprocessor/steps';

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

/**
 * Scenario Outline: Verify Selectable Elements are Highlighted on the "Selectable" Page
 *
 * @param value    The test parameter we desire to select
 */
Given('we are viewing the "Selectable" page', () => {
  cy.visit(demoQaUrl + '/selectable/');

  cy.url()
    .should('eq', demoQaUrl + 'selectable/')
})

When('we select {string}', (value) => {
  cy.get('#selectable')
    .find('li')
    .contains(value)
    .click()
})

Then('{string} should be highlighted', (value) => {
  cy.get('#selectable')
    .find('li')
    .contains(value)
    .should('have.class', 'ui-selected')
})
