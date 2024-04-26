/// <reference types="cypress" />
import mainPage from "../../../pages/main.page";
import endpoints from "../../../../resourcers/endpoints.json";
import * as allure from "allure-cypress";

it("TC_10_Verify social media icon", () => {
  allure.feature("Main page");

  allure.step("Open the contact us page", () => {
    mainPage.visit();
  });
  allure.step("Scroll to the footer", () => {
    mainPage.footerSection.footer().scrollIntoView();
    mainPage.footerSection.imageFooter().should("be.visible");
  });
  allure.step("Click on the linkeIn icon", () => {
    mainPage.footerSection.linkedIn().invoke('removeAttr', 'target');
    mainPage.footerSection.linkedIn().click();
    cy.url().should("eq", endpoints.linkedin);
    mainPage.visit();
  });
  allure.step("Click on the twitter icon", () => {
    mainPage.footerSection.twitter().invoke('removeAttr', 'target');
    mainPage.footerSection.twitter().click();
    cy.url().should("eq", endpoints.twitter);
    mainPage.visit();
  });
  allure.step("Click on the facebook icon", () => {
    mainPage.footerSection.facebook().invoke('removeAttr', 'target');
    mainPage.footerSection.facebook().click(); 
    cy.url().should("eq", endpoints.facebook);
    mainPage.visit();
  });
});
