/// <reference types="cypress" />
import mainPage from "../../pages/main.page";
import * as allure from "allure-cypress";

it("TC_03_Verify cookie pop-up in case allowing all cookies at once", () => {
  allure.feature("Cookie");

  allure.step("Verify that the cookie is empty", () => {
    cy.getCookies().should("be.empty");
  });
  allure.step("Open the main page", () => {
    mainPage.visit();
  });
  allure.step("Click on accept all button", () => {
    mainPage.cookiesElements.acceptAllBtn().click();
  });
  allure.step("Verify that the cookie modal closed", () => {
    mainPage.cookiesElements.cookieModal().should("not.visible");
  });
  allure.step("Verify that the cookies present", () => {
    cy.getCookies().should("have.length.greaterThan", 1);
  });
});
