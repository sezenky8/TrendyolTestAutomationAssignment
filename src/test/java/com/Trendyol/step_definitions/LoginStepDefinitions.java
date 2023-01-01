package com.Trendyol.step_definitions;

import com.Trendyol.pages.LoginPage;
import com.Trendyol.utilities.BrowserUtils;
import com.Trendyol.utilities.ConfigurationReader;
import com.Trendyol.utilities.Driver;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;


public class LoginStepDefinitions extends BrowserUtils {
    static Logger Logger = LogManager.getLogger(LoginStepDefinitions.class);

    @Given("The user is at the Trendyol home page and closes home page pop-up and accept cookies")
    public void theUserIsAtTheTrendyolHomePageAndClosesHomePagePopUpAndAcceptCookies() {
        openMainURL("URL");
        click(LoginPage.popUpCloseButton);
        click(LoginPage.cookieAcceptButton);
    }

    @When("The user clicks Giris Yap button on the home page")
    public void theUserClicksButtonOnTheHomePage() {
        click(LoginPage.loginButton);
    }

    @Then("The user should see login page is open")
    public void theUserShouldSeeLoginPageIsOpen() {
        String expected = "Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!";
        String actual = getText(LoginPage.loginPageControlText);
        Assert.assertEquals(expected, actual);
        Logger.info("Login page assertion is successful");
    }

    @And("The user enters correct email and password and then clicks Giris Yap button on the login page")
    public void theUserEntersCorrectEmailAndPasswordAndThenClicksButtonOnTheLoginPage() {
        sendKeys(LoginPage.emailBox, ConfigurationReader.get("email"));
        sendKeys(LoginPage.passwordBox, ConfigurationReader.get("password"));
        click(LoginPage.loginSubmitButton);
    }

    @Then("The user should be redirected to the home page while Hesabim button appears")
    public void theUserShouldBeRedirectedToTheHomePageWhileHesabimButtonAppears() {
        String expected = "Hesabım";
        String actual = getText(LoginPage.hesabimText);
        Assert.assertEquals(expected, actual);
        Logger.info("Hesabim button text assertion is successful");

    }

    @And("The user clicks Google login button and enters wrong email")
    public void theUserClicksGoogleLoginButtonAndEntersWrongEmail() {
        click(LoginPage.googleLoginButton);
        waitForPageToLoad(10);
        sendKeys(LoginPage.googleCredentialBox, ConfigurationReader.get("wrongEmail"));
        click(LoginPage.googleNextButton);
    }

    @Then("The user should see {string} message")
    public void theUserShouldSeeMessage(String arg0) {
        String expected = arg0;
        String actual = getText(LoginPage.googleWarningText);
        Assert.assertEquals(expected, actual);
        Logger.info(arg0 + " button text assertion is successful");
    }


    @And("The user enters correct email and null password and then clicks Giris Yap button on the login page")
    public void theUserEntersCorrectEmailAndNullPasswordAndThenClicksGirisYapButtonOnTheLoginPage() {
        sendKeys(LoginPage.emailBox, ConfigurationReader.get("email"));;
        click(LoginPage.loginSubmitButton);
    }

    @Then("The user should see {string} message on Login Page")
    public void theUserShouldSeeMessageOnLoginPage(String arg0) {
        String expected = arg0;
        String actual = getText(LoginPage.passwordWarningText);
        Assert.assertEquals(expected, actual);
        Logger.info(arg0 + " password text assertion is successful");
    }

    @And("The user enters correct email and incorrect password and then clicks Giris Yap button on the login page")
    public void theUserEntersCorrectEmailAndIncorrectPasswordAndThenClicksGirisYapButtonOnTheLoginPage() {
        sendKeys(LoginPage.emailBox, ConfigurationReader.get("email"));
        sendKeys(LoginPage.passwordBox, ConfigurationReader.get("wrongPassword"));
        click(LoginPage.loginSubmitButton);
    }

    @Then("The user should see {string} warning message on Login Page")
    public void theUserShouldSeeWarningMessageOnLoginPage(String arg0) {
        String expected = arg0;
        String actual = getText(LoginPage.emailOrPasswordWarningText);
        Assert.assertEquals(expected, actual);
        Logger.info(arg0 + " email or password text assertion is successful");
    }
}
