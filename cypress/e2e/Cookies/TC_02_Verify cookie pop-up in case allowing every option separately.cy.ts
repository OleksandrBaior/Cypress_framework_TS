/// <reference types="cypress" />
import mainPage from "../../pages/main.page";

it("TC_02_Verify cookie pop-up in case allowing every option separately", () => {
  mainPage.visit();
  cy.clearAllCookies()
  mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true });

  
  mainPage.cookiesElements.performanceCookies().check({ force: true });
  mainPage.cookiesElements.confirmMyChoiceBtn().click({ force: true });

  mainPage.cookiesElements.cookiesSettingsIcon().click({ force: true });
  mainPage.cookiesElements.performanceCookies().should("be.checked");
  mainPage.cookiesElements.functionalCookies().check({ force: true });
  mainPage.cookiesElements.confirmMyChoiceBtn().click({ force: true });

  mainPage.cookiesElements.cookiesSettingsIcon().click();
  mainPage.cookiesElements.functionalCookies().should("be.checked");
  mainPage.cookiesElements.targettingCookies().check({ force: true });
  mainPage.cookiesElements.confirmMyChoiceBtn().click({ force: true });

  mainPage.cookiesElements.cookiesSettingsIcon().click({ force: true });
  mainPage.cookiesElements.targettingCookies().should("be.checked");
});
