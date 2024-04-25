/// <reference types="cypress" />
import shopPage from "../../pages/shop.page";
import constants from "../../../resourcers/constants.json";
import * as allure from "allure-cypress";

it("TC_07_Verify adding and deleting item from the shoppoing card", () => {
  allure.feature("Shop page");

  allure.step("Open the shop page", () => {
    shopPage.visit();
    shopPage.homeTab.featuredProducts().should("be.visible");
  });
  allure.step("Add first item from the list to shopping cart", () => {
    shopPage.homeTab.firstItem().click();
  });
  allure.step("Verify that item is added to shopping cart", () => {
    shopPage.yourCart.shoppingCart().should("be.visible");
    shopPage.yourCart.addedItem().should("be.visible");
  });
  allure.step("Delete item from shopping cart", () => {
    shopPage.yourCart.deleteItemIcon().click();
    shopPage.yourCart.emptyText().should("have.text", constants.shopPage.shoppingCart.emptyText);
  });
  allure.step("Click on continue button", () => {
    shopPage.yourCart.continueShoppingBtn().click();
    shopPage.yourCart.shoppingCart().should("not.be.visible");
  });
});
