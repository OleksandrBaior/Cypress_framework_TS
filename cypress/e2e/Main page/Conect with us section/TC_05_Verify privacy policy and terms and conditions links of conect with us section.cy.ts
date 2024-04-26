/// <reference types="cypress" />
import mainPage from "../../../pages/main.page";
import endpoints from "../../../../resourcers/endpoints.json";
import * as allure from "allure-cypress";

it("TC_05_Verify privacy policy and terms and conditions links of conect with us section", () => {
  allure.feature("Main page");
  allure.story("Contact with us");
  
  allure.step("Open the main page", () => {
    mainPage.visit();
  });
 allure.step("Scroll to the connect us section", () => {
    mainPage.contactWithUsElements.tiltleSection().scrollIntoView();
  });
  allure.step("Click on the privacy policy lick and come back", () => {
    mainPage.contactWithUsElements.privacyPolicyLink().click();
    cy.url().should("eq", endpoints.privacyPolicy);
    cy.go("back");
  });
  allure.step("Click on the tearm and conditional lick and come back", () => {
    mainPage.contactWithUsElements.termsAndCondition().click();
    cy.url().should("eq", endpoints.termsAndConditions);
  });
});
