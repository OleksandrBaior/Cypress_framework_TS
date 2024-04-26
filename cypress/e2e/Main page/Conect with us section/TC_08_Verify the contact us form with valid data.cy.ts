/// <reference types="cypress" />
import contactUs from "../../../pages/contactUs.page";
import * as allure from "allure-cypress";

it("TC_08_Verify the contact us form with valid data", () => {
  allure.feature("Main page");
  allure.story("Contact with us");
  
  allure.step("Open the contact us page", () => {
    contactUs.visit();
    contactUs.form.title().should("be.visible");
  });
  allure.step("Select salase Injuiry", () => {
    contactUs.form.howCanWeHelp().select("Sales-Inquiry");
  });
  allure.step("Input first name", () => {
    contactUs.form.firstName().type(contactUs.randomFirstName());
  });
  allure.step("Input last name", () => {
    contactUs.form.lastName().type(contactUs.randomLastName());
  });
  allure.step("Input random email", () => {
    contactUs.form.email().type(contactUs.randomEmail());
  });
  allure.step("Select code of country", () => {
    contactUs.form.country().select("+380");
  });
  allure.step("Input randon phone number", () => {
    contactUs.form.phoneNumber().type(contactUs.randomPhooneNumber());
  });
  allure.step("Input randon phone website", () => {
    contactUs.form.companyWebsite().type(contactUs.randomText());
  });
  allure.step("Select primary interest", () => {
    contactUs.form.primaryInterest().select("AI / Inference");
  });
  allure.step("Select budget", () => {
    contactUs.form.budget().select("$500 - $1000");
  });
  allure.step("Input how do you plan", () => {
    contactUs.form.howDoYouPlan().type(contactUs.randomText());
  });
  allure.step("Input how did you hear about telnyx", () => {
    contactUs.form.howDidYouHearAboutTelnyx().type(contactUs.randomText());
  });
  allure.step("Mark checkbox subscription", () => {
    contactUs.form.subscriptionCheckbox().check();
  });
  allure.step("Click on the submit button", () => {
    contactUs.form.submitBtn().click()
    contactUs.form.submitBtn().should("have.text", "Please Wait");
  });
  allure.step("Verify that success tiile is visible", () => {
    contactUs.form.successTitle().should("be.visible");
  });  
});

