/// <reference types="cypress" />
import mainPage from "../../../pages/main.page";
import constants from "../../../../resourcers/constants.json";
import endpoints from "../../../../resourcers/endpoints.json";
import * as allure from "allure-cypress";

it("TC_04_Verify connect with us section with valid and invalid email", () => {
  allure.epic("Main page");
  allure.feature("Connect with us");

  allure.step("Open the main page", () => {
    mainPage.visit();
  });
  allure.step("Scroll to the connect us section", () => {
    mainPage.contactWithUsElements.tiltleSection().scrollIntoView();
  });
  allure.step("Verify tha the title section is visible", () => {
    mainPage.contactWithUsElements.tiltleSection().should("have.text", constants.mainPage.contactSection.tiltleSection);
  });
  allure.step("Verify tha the title is visible", () => {
    mainPage.contactWithUsElements.tiltle().should("have.text", constants.mainPage.contactSection.tiltle);
  });
  allure.step("Verify tha the description is visible", () => {
    mainPage.contactWithUsElements.description().should("have.text", constants.mainPage.contactSection.description);
  });
  allure.step("Input the email", () => {
    mainPage.contactWithUsElements.emailInput().type(constants.emails.invalidEmail);
  });
  allure.step("Input the invalid email anf verify the border", () => {
    mainPage.contactWithUsElements.emailInput().type(constants.emails.invalidEmail);
    mainPage.contactWithUsElements.emailInput().should("have.css", "border", constants.styleFiels.redBorder);
  });
  allure.step("Input the valid email", () => {
    mainPage.contactWithUsElements.emailInput().type(constants.emails.validEmail);
    mainPage.contactWithUsElements.emailInput().focus()
    mainPage.contactWithUsElements.emailInput().should("have.css", "border", constants.styleFiels.greenBorder);
  });
  allure.step("Click on the submit button", () => {
    mainPage.contactWithUsElements.submitBtn().click();
  });

  allure.step("Verify that create account page opens", () => {
    cy.url().should("eq", endpoints.createAccount);
  }); 
});


