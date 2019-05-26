import {Given, When, Then} from "cypress-cucumber-preprocessor";

const profileUrl = "http://www.jmarshthompson.com/"

Given('we visit the profile page', () => {
    cy.visit(profileUrl)
})

Then('', () => {
    cy.url()
    .should('eq', profileUrl)
})