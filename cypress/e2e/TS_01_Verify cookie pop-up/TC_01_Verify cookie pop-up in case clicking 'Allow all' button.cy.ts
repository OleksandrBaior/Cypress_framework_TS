/// <reference types="cypress" />
import CookiesPage from "../../pages/cookies.page";

describe("TS_01_Verify cookie pop-up", () => {
  it("TC_01_Verify cookie pop-up in case clicking 'Allow all' button", () => {
    const cookiesPage = new CookiesPage();

    cookiesPage.visit();
    cookiesPage.elements.cookieModal().should("be.visible");

    cookiesPage.elements.readMoreLink().click({force: true});
    cookiesPage.elements
      .titleReadMorePage()
      .should("have.text", "Telnyx Cookie Policy");
    cy.go("back");

    cookiesPage.elements.cookiesSettingsBtn().click({force: true});
    cookiesPage.elements.cookiesSettingsModal().should("be.visible", {setTimeout: 10000});
    cookiesPage.elements.cookiesSettingsCloseBtn().click({force: true});

    cookiesPage.elements.cookieModal().should("be.visible", {setTimeout: 10000});
    cookiesPage.elements.cookiesSettingsBtn().click({force: true});

    cookiesPage.elements.allowAllBtn().click({force: true});
    cookiesPage.elements.cookiesSettingsIcon().should("be.visible", {setTimeout: 10000});

    cookiesPage.elements.cookiesSettingsIcon().click({force: true});

    cookiesPage.elements.performanceCookies().should("be.checked", {setTimeout: 10000});
    cookiesPage.elements.functionalCookies().should("be.checked", {setTimeout: 10000});
    cookiesPage.elements.targettingCookies().should("be.checked", {setTimeout: 10000});
  });
});
