Feature: Basic Landing Page
  The basic landing page exists and can be nagivated to at the root of the site.

  Scenario: Landing page exists
    When I go to the root of the site
    Then I see the landing page with the text "Get started by editing"