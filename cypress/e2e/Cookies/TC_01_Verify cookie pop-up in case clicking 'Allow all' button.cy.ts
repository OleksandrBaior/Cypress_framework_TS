/// <reference types="cypress" />
import mainPage from "../../pages/main.page";

it("TC_01_Verify cookie pop-up in case clicking 'Allow all' button", () => {
  mainPage.visit();
  mainPage.cookiesElements.cookieModal().should("be.visible");

  mainPage.cookiesElements.readMoreLink().click({ force: true });
  mainPage.cookiesElements
    .titleReadMorePage()
    .should("have.text", "Telnyx Cookie Policy");
  cy.go("back");

  mainPage.cookiesElements.cookiesSettingsBtn().should("be.visible");
  mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true });
  mainPage.cookiesElements.cookiesSettingsModal().should("be.visible");
  mainPage.cookiesElements.cookiesSettingsCloseBtn().click({ force: true });

  mainPage.cookiesElements.cookieModal().should("be.visible");

  mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true });

  mainPage.cookiesElements.allowAllBtn().click({ force: true });

  mainPage.cookiesElements.cookiesSettingsIcon().should("be.visible");

  mainPage.cookiesElements.cookiesSettingsIcon().click({ force: true });

  mainPage.cookiesElements.performanceCookies().should("be.checked");
  mainPage.cookiesElements.functionalCookies().should("be.checked");
  mainPage.cookiesElements.targettingCookies().should("be.checked");
});
