/// <reference types="cypress" />
 
import login from "../../Pages/LoginPage/LoginPage.cy.js";

Given("I navigate to the Website", () => {
    login.enterURL();
});

When("I entered valid credential", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.enterUserNamePassword(element.email, element.validpassword);
    });
});

And("User click on sign in button", () => {
    login.clickSubmitButton();
});

Then("Validate the title after login", () => {
    login.verifyPageTitle();
});