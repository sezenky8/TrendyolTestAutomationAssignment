Feature: Testing all the Login scenarios

  Background:
    Given The user is at the Trendyol home page and closes home page pop-up and accept cookies

  Scenario: The user should be able to login with correct credentials
    When The user clicks Giris Yap button on the home page
    Then The user should see login page is open
    And The user enters correct email and password and then clicks Giris Yap button on the login page
    Then The user should be redirected to the home page while Hesabim button appears

  Scenario: The user should not be able to login with wrong google credentials
    When The user clicks Giris Yap button on the home page
    Then The user should see login page is open
    And The user clicks Google login button and enters wrong email
    Then The user should see "Google Hesabınız bulunamadı" message

  Scenario: The user should not be able to login with correct email and null password
    When The user clicks Giris Yap button on the home page
    Then The user should see login page is open
    And The user enters correct email and null password and then clicks Giris Yap button on the login page
    Then The user should see "Lütfen şifrenizi giriniz." message on Login Page

  Scenario: The user should not be able to login with correct email and incorrect password
    When The user clicks Giris Yap button on the home page
    Then The user should see login page is open
    And The user enters correct email and incorrect password and then clicks Giris Yap button on the login page
    Then The user should see "E-posta adresiniz ve/veya şifreniz hatalı." warning message on Login Page




