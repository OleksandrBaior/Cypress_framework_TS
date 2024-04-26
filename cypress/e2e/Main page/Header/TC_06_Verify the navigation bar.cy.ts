/// <reference types="cypress" />
import mainPage from "../../../pages/main.page";
import * as allure from "allure-cypress";

it("TC_06_Verify the navigation bar", () => {
  allure.feature("Main page");

  allure.step("Open the main page", () => {
    mainPage.visit();
  });

  for (const buttonName in mainPage.navigationBar) {
    allure.step(`Verify ${buttonName} button is visible`, () => {
       mainPage.navigationBar[buttonName]().should("be.visible");
    });
  }
  
});
