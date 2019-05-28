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

  Scenario Outline: Verify Selectable Elements are Highlighted on the "Selectable" Page
    Given we are viewing the "Selectable" page
    When we select "<value>"
    Then "<value>" should be highlighted

    Examples:
      | value |
      | Item 1 |
      | Item 3 |
      | Item 6 |