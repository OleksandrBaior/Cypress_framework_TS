/// <reference types="cypress" />
import CookiesPage from "../../pages/cookies.page";

describe("TS_01_Verify cookie pop-up", () => {
  it("TC_03_Verify cookie pop-up in case allowing all cookies at once", () => {
    const cookiesPage = new CookiesPage();

    cy.getCookies().should("be.empty");
    cookiesPage.visit();
    cookiesPage.elements.acceptAllBtn().click();
    cookiesPage.elements.cookieModal().should("not.visible");
    cookiesPage.elements.cookiesSettingsIcon().should("be.visible");
    cy.getCookies().should("have.length", 7);
  });
});
