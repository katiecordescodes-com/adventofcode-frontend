Feature: Basic Landing Page
  The basic landing page exists and can be nagivated to at the root of the site.

  Scenario: Landing page exists
    When I go to the root of the site
    Then I see the landing page with the text "Advent of Code - katiecordescodes.com Solutions"
    And I see the landing page with the title "Advent of Code - katiecordescodes.com Solutions"