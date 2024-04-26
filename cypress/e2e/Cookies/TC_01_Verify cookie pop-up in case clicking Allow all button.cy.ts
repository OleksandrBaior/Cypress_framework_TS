/// <reference types="cypress" />
import mainPage from "../../pages/main.page";
import * as allure from "allure-cypress";

it("TC_01_Verify cookie pop-up in case clicking Allow all button", () => {
  allure.feature("Cookie"); 

  allure.step("Open the main page", () => {
    mainPage.visit();
  });
  allure.step("Verify that cookie modal appears", () => {
    mainPage.cookiesElements.cookieModal().should("be.visible");
  });
  allure.step("Click on read more link and come back", () => {
    mainPage.cookiesElements.readMoreLink().click({ force: true });
    mainPage.cookiesElements.titleReadMorePage().should("have.text", "Telnyx Cookie Policy");
    cy.go("back");
    cy.reload();
  });
  allure.step("Click on cookies settings button", () => {
    mainPage.cookiesElements.cookiesSettingsBtn().should("be.visible");
    mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true });
    mainPage.cookiesElements.cookiesSettingsModal().should("be.visible");
  });
  allure.step("Click on close button ", () => {
    mainPage.cookiesElements.cookiesSettingsCloseBtn().click({ force: true });
    mainPage.cookiesElements.cookiesSettingsModal().should("not.be.visible");
  });
  allure.step("Click on cookies settings button", () => {
    mainPage.cookiesElements.cookiesSettingsBtn().should("be.visible");
    mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true }).click({ force: true });
    mainPage.cookiesElements.cookiesSettingsModal().should("be.visible");
  });
  allure.step("Click on allow all button", () => {
    mainPage.cookiesElements.confirmMyChoiceBtn().should("be.visible");
    mainPage.cookiesElements.confirmMyChoiceBtn().click({ force: true });
  })
  allure.step("Verify that cookies modal does not appaer", () => {
    mainPage.cookiesElements.cookieModal().should("not.be.visible");
  })
});
