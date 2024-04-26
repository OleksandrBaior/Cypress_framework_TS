/// <reference types="cypress" />
import contactUs from "../../../pages/contactUs.page";
import constants from "../../../../resourcers/constants.json";
import * as allure from "allure-cypress";

it("TC_09_Verify the contact us form with empty field", () => {
  allure.feature("Main page");
  allure.story("Contact with us");
  
  allure.step("Open the contact us page", () => {
    contactUs.visit();
  });
  allure.step("Click on the submit button", () => {
    contactUs.form.submitBtn().click();
  });
  allure.step("Verify that ho can we help field is error state", () => {
    contactUs.form.howCanWeHelp().should("have.css", "border-color", constants.styleFiels.borderColor)
    cy.get(contactUs.form.errorMsg).should("be.visible");
    cy.get(contactUs.form.errorMsg).should('have.text', constants.styleFiels.error);
  });
});
