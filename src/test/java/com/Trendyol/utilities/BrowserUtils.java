package com.Trendyol.utilities;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



import java.time.Duration;
import java.util.List;

public class BrowserUtils {

    String randomProductName;
    String randomAddToBasket;
    int randomNumber;
    static Logger Logger= LogManager.getLogger(BrowserUtils.class);

    public void openMainURL(String string) {
        Driver.get().get(ConfigurationReader.get(string));
        Logger.info("URL is opened");
    }

    public String getText(By locator) {
        waitUntilElementVisible(locator);
        String text=Driver.get().findElement(locator).getText();
        Logger.info("Successfully got the text of the element");
        return text;
    }

    public static WebElement waitUntilElementVisible(By locator) {
        WebDriverWait wait = new WebDriverWait(Driver.get(), Duration.ofSeconds(10));
        Logger.info("Waiting for the element to be visible");
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    public void click(By locator) {
        waitUntilElementVisible(locator);
        Driver.get().findElement(locator).click();
        Logger.info("Successfully clicked the element");
    }

    public void sendKeys(By locator,String keyword) {
        waitUntilElementVisible(locator);
        Driver.get().findElement(locator).sendKeys(keyword);
        Logger.info("Successfully sent the word");
    }

    public int randomNumberGenerator(int min, int max){
        int randomNumber = (int) (Math.random() * (max - min + 1) + min);
        Logger.info("Random number has been generated");
        return randomNumber;
    }

    public static void waitForPageToLoad(long timeOutInSeconds) {
        ExpectedCondition<Boolean> expectation = new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                return ((JavascriptExecutor) driver).executeScript("return document.readyState").equals("complete");
            }
        };
        try {
            WebDriverWait wait = new WebDriverWait(Driver.get(), Duration.ofSeconds(10));
            wait.until(expectation);
            Logger.info("Page is successfully loaded");
        } catch (Throwable error) {
            Logger.error(error);
            error.printStackTrace();
        }
    }

    public void randomProductSelector(By locator) {
        List<WebElement>productListName=Driver.get().findElements(locator);
        randomNumber=randomNumberGenerator(0,23);
        randomProductName=productListName.get(randomNumber).getText();
        productListName.get(randomNumber).click();
    }

    public void randomSepeteEkleSelector(By locator) {
        List<WebElement>productListName=Driver.get().findElements(locator);
        randomNumber=randomNumberGenerator(0,23);
        randomAddToBasket=productListName.get(randomNumber).getText();
        productListName.get(randomNumber).click();
    }


}
