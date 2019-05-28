import {
  Given,
  Then
} from "cypress-cucumber-preprocessor/steps";

const profileUrl = "http://www.jmarshthompson.com/"

Given('we visit the profile page', () => {
  cy.visit(profileUrl)
})

Then('the profile page should open', () => {
  cy.url()
    .should('eq', profileUrl)
})
