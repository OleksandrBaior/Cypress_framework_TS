/// <reference types="cypress" />
import mainPage from "../../../pages/main.page";
import constants from "../../../../resourcers/constants.json";
import endpoints from "../../../../resourcers/endpoints.json";

it("TC_04_Verify conect with us section with valid and invalid email", () => {
  mainPage.visit();
  mainPage.contactWithUsElements.tiltleSection().scrollIntoView();
  mainPage.contactWithUsElements.tiltleSection().should("have.text", constants.mainPage.contactSection.tiltleSection);
  mainPage.contactWithUsElements.tiltle().should("have.text", constants.mainPage.contactSection.tiltle);
  mainPage.contactWithUsElements.subTitle().should("have.text", constants.mainPage.contactSection.subTitile);
  mainPage.contactWithUsElements.description().should("have.text", constants.mainPage.contactSection.description);
  mainPage.contactWithUsElements.emailInput().type(constants.emails.invalidEmail);
  mainPage.contactWithUsElements.emailInput().should("have.css", "border", constants.styleFiels.border);
  mainPage.contactWithUsElements.emailInput().type(constants.emails.validEmail);
  mainPage.contactWithUsElements.submitBtn().click();

  cy.url().should("eq", endpoints.createAccount);
});
