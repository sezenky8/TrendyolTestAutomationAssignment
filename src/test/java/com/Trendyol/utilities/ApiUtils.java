package com.Trendyol.utilities;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

public class ApiUtils extends BrowserUtils {
    Response response;
    public Response retrieveTitleValue(String URL) {
        response = RestAssured.given()
                .accept(ContentType.JSON)
                .get(URL);
        return response;
    }
}
