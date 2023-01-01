package com.Trendyol.step_definitions;

import com.Trendyol.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Hooks {
    Logger Logger = LogManager.getLogger(Hooks.class);

    @Before
    public void openThePage(Scenario scenario) {
        Driver.get().manage().window().maximize();
        Logger.info("The scenario '" + scenario.getName() + "' started to run");
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot, "image/png", "screenshot");
            Logger.info("The scenario '" + scenario.getName() + "' is failed ");
        }
        Logger.info("The scenario '" + scenario.getName() + "' is "+scenario.getStatus()+" ");
        Driver.closeDriver();
    }
}
