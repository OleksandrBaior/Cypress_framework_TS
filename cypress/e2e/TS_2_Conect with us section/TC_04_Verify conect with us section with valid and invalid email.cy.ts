/// <reference types="cypress" />
import mainPage from "../../pages/main.page";
import constants from "../../../resourcers/constants.json";
import endpoints from "../../../resourcers/endpoints.json";

describe("TS_2_Conect with us section", () => {
  it("TC_04_Verify conect with us section with valid and invalid email", () => {
   
    mainPage.visit();
    mainPage.contactWithUsElements.tiltleSection().scrollIntoView();

    mainPage.contactWithUsElements
      .tiltleSection()
      .should("have.text", constants.mainPage.contactSection.tiltleSection);

    mainPage.contactWithUsElements
      .tiltle()
      .should("have.text", constants.mainPage.contactSection.tiltle);

    mainPage.contactWithUsElements
      .subTitle()
      .should("have.text", constants.mainPage.contactSection.subTitile);

    mainPage.contactWithUsElements
      .description()
      .should("have.text", constants.mainPage.contactSection.description);

    mainPage.contactWithUsElements
      .emailInput()
      .type(constants.emails.invalidEmail);

    mainPage.contactWithUsElements
      .emailInput()
      .should("have.css", "border", "1px solid rgb(235, 0, 0)");

    mainPage.contactWithUsElements
      .emailInput()
      .type(constants.emails.validEmail);

    mainPage.contactWithUsElements.submitBtn().click();

    cy.url().should("eq", endpoints.createAccount);
  });
});
