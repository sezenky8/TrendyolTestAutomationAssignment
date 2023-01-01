package com.Trendyol.utilities;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

public class ApiUtils {
    Response response;
    public Response retrieveDetailsOfBooking() {
        response = RestAssured.given()
                .accept(ContentType.JSON)
                .get("https://www.omdbapi.com/?s=Batman&page=2&apikey="+ConfigurationReader.get("apikey"));
        return response;
    }
}
