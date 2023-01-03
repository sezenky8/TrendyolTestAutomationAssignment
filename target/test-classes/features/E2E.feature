Feature: Testing e2e scenario from searching a product until checkout

  Background:
    Given The user is at the Trendyol home page and closes home page pop-up and accept cookies

  Scenario: The user should be able to login with correct credentials
    When The user clicks Giris Yap button on the home page
    Then The user should see login page is open
    And The user enters correct email and password and then clicks Giris Yap button on the login page
    Then The user should be redirected to the home page while Hesabim button appears

  Scenario: The user should be able to search for an item then add it to the cart and proceed checkout
    When The user clicks searchBox and search for a random product
    And The user clicks a random product
    And The user clicks Sepete Ekle button
    And The user clicks Sepetim button and clicks Sepeti Onayla button on Cart Page

  Scenario: The user should be able to search for an item then add it to the cart within search result
    When The user clicks searchBox and search for a random product
    And The user clicks Sepete Ekle button on a random product
    And The user clicks Sepetim button and clicks Sepeti Onayla button on Cart Page
    Then The user should be redirected to the Login Page

