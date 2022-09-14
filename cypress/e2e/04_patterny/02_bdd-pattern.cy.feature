Feature: Login
Scenario: visiting the login page
    Given User exists
    When User visits login
    Then User submits credentials
