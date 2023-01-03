package com.Trendyol.pages;

import org.openqa.selenium.By;


public class HomePage {

    public static final By searchBox = By.xpath("//input[@data-testid='suggestion']");
    public static final By searchIcon = By.xpath("//i[@data-testid='search-icon']");
    public static final By randomProductName = By.xpath("//span[@class='prdct-desc-cntnr-ttl']");
    public static final By addToBasketButton = By.xpath("//div[@class='add-to-basket-button-text']");
    public static final By sepetim = By.xpath("//p[normalize-space()='Sepetim']");
    public static final By sepetiOnayla = By.xpath("//div[@class='pb-summary-approve']");
    public static final By randomAddToBasket = By.xpath("//div[@class='add-to-bs-tx']");

    public static final By scrollToUp = By.xpath("//div[@class='scroll-to-up']");
}
