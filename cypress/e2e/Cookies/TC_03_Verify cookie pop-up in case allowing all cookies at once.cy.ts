/// <reference types="cypress" />
import mainPage from "../../pages/main.page";

it("TC_03_Verify cookie pop-up in case allowing all cookies at once", () => {
  cy.getCookies().should("be.empty");
  mainPage.visit();
  cy.wait(3000);
  mainPage.cookiesElements.acceptAllBtn().click();
  mainPage.cookiesElements.cookieModal().should("not.visible");
  mainPage.cookiesElements.cookiesSettingsIcon().should("be.visible");
  cy.getCookies().should("have.length", 7);
});
