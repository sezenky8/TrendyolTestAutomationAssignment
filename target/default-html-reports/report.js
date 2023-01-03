$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Api.feature");
formatter.feature({
  "name": "Testing Api scenario from searching by title on Home Page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is at the Trendyol home page and closes home page pop-up and accept cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserIsAtTheTrendyolHomePageAndClosesHomePagePopUpAndAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "asd",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user sends request to Trendyol Api to receive the title values",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.ApiStepDefinitons.theUserSendsRequestToTrendyolApiToReceiveTheTitleValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user searches for the title received from Trendyol Api",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.ApiStepDefinitons.theUserSearchesForTheTitleReceivedFromTrendyolApi()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/E2E.feature");
formatter.feature({
  "name": "Testing e2e scenario from searching a product until checkout",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is at the Trendyol home page and closes home page pop-up and accept cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserIsAtTheTrendyolHomePageAndClosesHomePagePopUpAndAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user should be able to login with correct credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user clicks Giris Yap button on the home page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserClicksButtonOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see login page is open",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserShouldSeeLoginPageIsOpen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters correct email and password and then clicks Giris Yap button on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserEntersCorrectEmailAndPasswordAndThenClicksButtonOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be redirected to the home page while Hesabim button appears",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserShouldBeRedirectedToTheHomePageWhileHesabimButtonAppears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is at the Trendyol home page and closes home page pop-up and accept cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserIsAtTheTrendyolHomePageAndClosesHomePagePopUpAndAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user should be able to search for an item then add it to the cart and proceed checkout",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user clicks searchBox and search for a random product",
  "keyword": "When "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.E2EStepDefinitions.theUserClicksSearchBoxAndSearchForARandomProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks a random product",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.E2EStepDefinitions.theUserClicksARandomProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Sepete Ekle button",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.E2EStepDefinitions.theUserClicksSepeteEkleButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //div[@class\u003d\u0027add-to-basket-button-text\u0027] (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027DESKTOP-4V2V1EA\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\Sezen\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53539}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53539/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 75feef84d8252de47e1798a8ade910ce\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:138)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat com.Trendyol.utilities.BrowserUtils.waitUntilElementVisible(BrowserUtils.java:37)\r\n\tat com.Trendyol.utilities.BrowserUtils.click(BrowserUtils.java:41)\r\n\tat com.Trendyol.step_definitions.E2EStepDefinitions.theUserClicksSepeteEkleButton(E2EStepDefinitions.java:33)\r\n\tat ✽.The user clicks Sepete Ekle button(file:///C:/Users/Sezen/IdeaProjects/TrendyolTestAutomationAssignment/src/test/resources/features/E2E.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user clicks Sepetim button and clicks Sepeti Onayla button on Cart Page",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.E2EStepDefinitions.theUserClicksSepetimButtonAndClicksSepetiOnaylaButtonOnCartPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is at the Trendyol home page and closes home page pop-up and accept cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserIsAtTheTrendyolHomePageAndClosesHomePagePopUpAndAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user should be able to search for an item then add it to the cart within search result",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user clicks searchBox and search for a random product",
  "keyword": "When "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.E2EStepDefinitions.theUserClicksSearchBoxAndSearchForARandomProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Sepete Ekle button on a random product",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.E2EStepDefinitions.theUserClicksSepeteEkleButtonOnARandomProduct()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"add-to-bs-tx\"\u003e...\u003c/div\u003e is not clickable at point (1447, 656). Other element would receive the click: \u003cbutton class\u003d\"add-to-basket-button\"\u003e...\u003c/button\u003e\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027DESKTOP-4V2V1EA\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a9d3f38b4692f0ad72c7045e07fe1649, clickElement {id\u003dcaf3c36c-d295-4248-987a-995b47ac0812}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\Sezen\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53667}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53667/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (a9d3f38b4692f0ad72c7045e07fe1649)] -\u003e xpath: //div[@class\u003d\u0027add-to-bs-tx\u0027]]\nSession ID: a9d3f38b4692f0ad72c7045e07fe1649\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat com.Trendyol.utilities.BrowserUtils.randomSepeteEkleSelector(BrowserUtils.java:85)\r\n\tat com.Trendyol.step_definitions.E2EStepDefinitions.theUserClicksSepeteEkleButtonOnARandomProduct(E2EStepDefinitions.java:47)\r\n\tat ✽.The user clicks Sepete Ekle button on a random product(file:///C:/Users/Sezen/IdeaProjects/TrendyolTestAutomationAssignment/src/test/resources/features/E2E.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user clicks Sepetim button and clicks Sepeti Onayla button on Cart Page",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.E2EStepDefinitions.theUserClicksSepetimButtonAndClicksSepetiOnaylaButtonOnCartPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should be redirected to the Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.E2EStepDefinitions.theUserShouldBeRedirectedToTheLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Testing all the Login scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is at the Trendyol home page and closes home page pop-up and accept cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserIsAtTheTrendyolHomePageAndClosesHomePagePopUpAndAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user should be able to login with correct credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user clicks Giris Yap button on the home page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserClicksButtonOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see login page is open",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserShouldSeeLoginPageIsOpen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters correct email and password and then clicks Giris Yap button on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserEntersCorrectEmailAndPasswordAndThenClicksButtonOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be redirected to the home page while Hesabim button appears",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserShouldBeRedirectedToTheHomePageWhileHesabimButtonAppears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is at the Trendyol home page and closes home page pop-up and accept cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserIsAtTheTrendyolHomePageAndClosesHomePagePopUpAndAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user should not be able to login with wrong google credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user clicks Giris Yap button on the home page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserClicksButtonOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see login page is open",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserShouldSeeLoginPageIsOpen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Google login button and enters wrong email",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserClicksGoogleLoginButtonAndEntersWrongEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see \"Google Hesabınız bulunamadı\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserShouldSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is at the Trendyol home page and closes home page pop-up and accept cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserIsAtTheTrendyolHomePageAndClosesHomePagePopUpAndAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user should not be able to login with correct email and null password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user clicks Giris Yap button on the home page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserClicksButtonOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see login page is open",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserShouldSeeLoginPageIsOpen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters correct email and null password and then clicks Giris Yap button on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserEntersCorrectEmailAndNullPasswordAndThenClicksGirisYapButtonOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see \"Lütfen şifrenizi giriniz.\" message on Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserShouldSeeMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is at the Trendyol home page and closes home page pop-up and accept cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserIsAtTheTrendyolHomePageAndClosesHomePagePopUpAndAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user should not be able to login with correct email and incorrect password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user clicks Giris Yap button on the home page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserClicksButtonOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see login page is open",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserShouldSeeLoginPageIsOpen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters correct email and incorrect password and then clicks Giris Yap button on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserEntersCorrectEmailAndIncorrectPasswordAndThenClicksGirisYapButtonOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see \"E-posta adresiniz ve/veya şifreniz hatalı.\" warning message on Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Trendyol.step_definitions.LoginStepDefinitions.theUserShouldSeeWarningMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});