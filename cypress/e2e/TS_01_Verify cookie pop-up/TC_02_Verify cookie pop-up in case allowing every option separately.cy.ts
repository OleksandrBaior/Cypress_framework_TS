/// <reference types="cypress" />
import CookiesPage from "../../pages/cookies.page";

describe("TS_01_Verify cookie pop-up", () => {
  it("TC_02_Verify cookie pop-up in case allowing every option separately", () => {
    const cookiesPage = new CookiesPage()

    cookiesPage.visit();
    cookiesPage.elements.cookiesSettingsBtn().click({force: true});

    cookiesPage.elements.performanceCookies().check({ force: true });
    cookiesPage.elements.confirmMyChoiceBtn().click({force: true});

    cookiesPage.elements.cookiesSettingsIcon().click({force: true});
    cookiesPage.elements.performanceCookies().should("be.checked");
    cookiesPage.elements.functionalCookies().check({ force: true });
    cookiesPage.elements.confirmMyChoiceBtn().click({ force: true });

    cookiesPage.elements.cookiesSettingsIcon().click();
    cookiesPage.elements.functionalCookies().should("be.checked");
    cookiesPage.elements.targettingCookies().check({ force: true });
    cookiesPage.elements.confirmMyChoiceBtn().click({ force: true });

    cookiesPage.elements.cookiesSettingsIcon().click({force: true});
    cookiesPage.elements.targettingCookies().should("be.checked");
  });
});
