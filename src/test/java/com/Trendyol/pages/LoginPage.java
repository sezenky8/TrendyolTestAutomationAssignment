package com.Trendyol.pages;

import org.openqa.selenium.By;

public class LoginPage {
    public static final By popUpCloseButton = By.xpath("//div[@title='Kapat']");
    public static final By cookieAcceptButton = By.id("onetrust-accept-btn-handler");
    public static final By loginButton = By.xpath("//div[@class='link account-user']");
    public static final By loginPageControlText = By.xpath("//h3[text()='Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!']");
    public static final By emailBox = By.xpath("//input[@data-testid='email-input']");
    public static final By passwordBox = By.xpath("//input[@data-testid='password-input']");
    public static final By loginSubmitButton = By.xpath("//button[@class='q-primary q-fluid q-button-medium q-button submit']");
    public static final By hesabimText = By.xpath("//p[text()='Hesabım']");
    public static final By googleLoginButton = By.xpath("//div[text()='google']");
    public static final By googleCredentialBox = By.xpath("//input[@id='identifierId']");
    public static final By googleWarningText = By.xpath("//div[text()='Google Hesabınız bulunamadı']");
    public static final By googleNextButton = By.xpath("//span[contains(text(),'İleri')]");
    public static final By passwordWarningText = By.xpath("//span[contains(text(),'Lütfen şifrenizi giriniz')]");
    public static final By emailOrPasswordWarningText = By.xpath("//span[contains(text(),'E-posta adresiniz ve/veya şifreniz hatalı')]");




}
