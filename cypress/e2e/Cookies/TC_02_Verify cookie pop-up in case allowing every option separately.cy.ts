/// <reference types="cypress" />
import mainPage from "../../pages/main.page";
import * as allure from "allure-cypress";

it("TC_02_Verify cookie pop-up in case allowing every option separately", () => {
  allure.feature("Cookie");

  allure.step("Open the main page", () => {
    mainPage.visit();
  });
  allure.step("Click on the Settings button", () => {
    mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true });
  });
  allure.step("Mark the performance checkbox", () => {
    mainPage.cookiesElements.performanceCookies().check({ force: true });
    mainPage.cookiesElements.performanceCookies().should("be.checked");
  });
  allure.step("Mark the functional checkbox", () => {
    mainPage.cookiesElements.functionalCookies().check({ force: true });
    mainPage.cookiesElements.functionalCookies().should("be.checked");
  });
  allure.step("Mark the targetting checkbox ", () => {
    mainPage.cookiesElements.targettingCookies().check({ force: true });
    mainPage.cookiesElements.targettingCookies().should("be.checked");
  });
  allure.step("Click on the Confirm button", () => {
    mainPage.cookiesElements.confirmMyChoiceBtn().click({ force: true });
  });
  allure.step("Verify that the cookie modal closed", () => {
    mainPage.cookiesElements.cookieModal().should("not.be.visible");
  });
});
