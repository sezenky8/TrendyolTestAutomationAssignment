package com.Trendyol.step_definitions;

import com.Trendyol.pages.HomePage;

import com.Trendyol.pages.LoginPage;
import com.Trendyol.utilities.BrowserUtils;
import com.Trendyol.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.log4j.LogManager;
import org.junit.Assert;



public class E2EStepDefinitions extends BrowserUtils {
    static org.apache.log4j.Logger Logger = LogManager.getLogger(E2EStepDefinitions.class);

    @When("The user clicks searchBox and search for a random product")
    public void theUserClicksSearchBoxAndSearchForARandomProduct() {
        sendKeys(HomePage.searchBox, ConfigurationReader.get("item"));
        click(HomePage.searchIcon);
    }

    @And("The user clicks a random product")
    public void theUserClicksARandomProduct() {
        randomProductSelector(HomePage.randomProductName);
    }

    @And("The user clicks Sepete Ekle button")
    public void theUserClicksSepeteEkleButton() {
        waitForPageToLoad(25);
        click(HomePage.addToBasketButton);

    }

    @And("The user clicks Sepetim button and clicks Sepeti Onayla button on Cart Page")
    public void theUserClicksSepetimButtonAndClicksSepetiOnaylaButtonOnCartPage() {
        click(HomePage.scrollToUp);
        click(HomePage.sepetim);
        click(HomePage.sepetiOnayla);
    }


    @And("The user clicks Sepete Ekle button on a random product")
    public void theUserClicksSepeteEkleButtonOnARandomProduct() {
        randomSepeteEkleSelector(HomePage.randomAddToBasket);
        waitUntilElementVisible(HomePage.randomAddToBasket);
        click(HomePage.randomAddToBasket);

    }

    @Then("The user should be redirected to the Login Page")
    public void theUserShouldBeRedirectedToTheLoginPage() {
        String expected = "Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!";
        String actual = getText(LoginPage.loginPageControlText);
        Assert.assertEquals(expected, actual);
        Logger.info("Login page assertion is successful");

    }
}