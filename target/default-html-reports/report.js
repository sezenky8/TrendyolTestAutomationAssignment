$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/E2E.feature");
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"add-to-bs-tx\"\u003e...\u003c/div\u003e is not clickable at point (697, 656). Other element would receive the click: \u003cbutton class\u003d\"add-to-basket-button\"\u003e...\u003c/button\u003e\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027DESKTOP-4V2V1EA\u0027, ip: \u0027192.168.1.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c4e44bc3c0c107240f76fec873fd8dbc, clickElement {id\u003ddf9ea272-0505-4c6b-8e61-00057ae5907f}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\Sezen\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65209}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65209/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (c4e44bc3c0c107240f76fec873fd8dbc)] -\u003e xpath: //div[@class\u003d\u0027add-to-bs-tx\u0027]]\nSession ID: c4e44bc3c0c107240f76fec873fd8dbc\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat com.Trendyol.utilities.BrowserUtils.randomSepeteEkleSelector(BrowserUtils.java:100)\r\n\tat com.Trendyol.step_definitions.E2EStepDefinitions.theUserClicksSepeteEkleButtonOnARandomProduct(E2EStepDefinitions.java:60)\r\n\tat ✽.The user clicks Sepete Ekle button on a random product(file:///C:/Users/Sezen/IdeaProjects/TrendyolTestAutomationAssignment/src/test/resources/features/E2E.feature:21)\r\n",
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
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});