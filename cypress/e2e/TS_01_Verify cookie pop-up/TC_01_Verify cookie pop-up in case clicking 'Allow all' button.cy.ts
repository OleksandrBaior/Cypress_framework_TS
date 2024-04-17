/// <reference types="cypress" />
import CookiesPage from "../../pages/cookies.page";

describe("TS_01_Verify cookie pop-up", () => {
  it("TC_01_Verify cookie pop-up in case clicking 'Allow all' button", () => {
    const cookiesPage = new CookiesPage();

    cookiesPage.visit();
    cookiesPage.elements.cookieModal().should("be.visible");

    cookiesPage.elements.readMoreLink().click();
    cookiesPage.elements
      .titleReadMorePage()
      .should("have.text", "Telnyx Cookie Policy");
    cy.go("back");

    cookiesPage.elements.cookiesSettingsBtn().click();
    cookiesPage.elements.cookiesSettingsModal().should("be.visible");
    cookiesPage.elements.cookiesSettingsCloseBtn().click();

    cookiesPage.elements.cookieModal().should("be.visible");
    cookiesPage.elements.cookiesSettingsBtn().click();

    cookiesPage.elements.allowAllBtn().click();
    cookiesPage.elements.cookiesSettingsIcon().should("be.visible");

    cookiesPage.elements.cookiesSettingsIcon().click();

    cookiesPage.elements.performanceCookies().should("be.checked");
    cookiesPage.elements.functionalCookies().should("be.checked");
    cookiesPage.elements.targettingCookies().should("be.checked");
  });
});
