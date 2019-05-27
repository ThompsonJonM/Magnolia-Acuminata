Feature: Demo QA

  As a QA Engineer
  I would like to automate specific interactions on the Demo QA site

  Scenario: Visit the Demo QA Website
    When we visit the Demo QA website
    Then the Demo QA website should load

  Scenario: Visit the "Interactions" Page
    Given we are viewing the Demo QA website
    When we select "Interactions"
    Then the "Interactions" page should load
