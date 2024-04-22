/// <reference types="cypress" />
import mainPage from "../../../pages/main.page";

it("TC_06_Verify the navigation bar.cy.ts", () => {
  mainPage.visit();


  mainPage.navigationBar.productsBtn().should("be.visible");
  // mainPage.navigationBar.productsBtn().focus();
  mainPage.navigationBar.productsBtn().click({ force: true })




  // mainPage.navigationBar.productsModal().should("be.visible");

  // mainPage.navigationBar.solutionBtn().click();
  // cy.url().should("eq", endpoints.solution);
  // cy.go("back");

  // mainPage.navigationBar.pricingBtn().click();
  // mainPage.navigationBar.pricingModal().should("be.visible");

  // mainPage.navigationBar.whyTelnuxBtn().click();
  // mainPage.navigationBar.whyTelnuxModal().should("be.visible");

  // mainPage.navigationBar.resoursesBtn().click();
  // mainPage.navigationBar.resoursesModal().should("be.visible");

  // mainPage.navigationBar.developersBtn().click();
  // mainPage.navigationBar.developersModal().should("be.visible");
});
