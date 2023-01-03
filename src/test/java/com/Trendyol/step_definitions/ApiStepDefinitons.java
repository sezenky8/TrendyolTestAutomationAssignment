package com.Trendyol.step_definitions;

import com.Trendyol.pages.HomePage;
import com.Trendyol.pojos.Root;
import com.Trendyol.utilities.ApiUtils;
import com.Trendyol.utilities.ConfigurationReader;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.restassured.response.Response;

public class ApiStepDefinitons extends ApiUtils {
    String title;
    @Given("The user sends request to Trendyol Api to receive the title values")
    public void theUserSendsRequestToTrendyolApiToReceiveTheTitleValues() throws JsonProcessingException {
        Response response= retrieveTitleValue(ConfigurationReader.get("apiUrl"));
        ObjectMapper om = new ObjectMapper();
        Root root = om.readValue(response.asString(), Root.class);
        title=root.title;
        System.out.println(root.title);
    }

    @And("The user searches for the title received from Trendyol Api")
    public void theUserSearchesForTheTitleReceivedFromTrendyolApi() {
        sendKeys(HomePage.searchBox,title);
        click(HomePage.searchIcon);
    }
}
