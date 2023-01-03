Feature: Testing Api scenario from searching by title on Home Page

  Background:
    Given The user is at the Trendyol home page and closes home page pop-up and accept cookies

  Scenario: The user receive title from request
    Given The user sends request to Trendyol Api to receive the title values
    And The user searches for the title received from Trendyol Api


