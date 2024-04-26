/// <reference types="cypress" />
import contactUs from "../../../pages/contactUs.page";

it("TC_08_Verify the contact us form with valid data", () => {
  contactUs.visit();

  contactUs.form.title().should("be.visible");
  contactUs.form.howCanWeHelp().select("Sales-Inquiry");
  contactUs.form.firstName().type(contactUs.randomFirstName());
  contactUs.form.lastName().type(contactUs.randomLastName());
  contactUs.form.email().type(contactUs.randomEmail());
  contactUs.form.country().select("+380");
  contactUs.form.phoneNumber().type(contactUs.randomPhooneNumber());
  contactUs.form.companyWebsite().type(contactUs.randomText());
  contactUs.form.primaryInterest().select("AI / Inference");
  contactUs.form.budget().select("$500 - $1000");
  contactUs.form.howDoYouPlan().type(contactUs.randomText());
  contactUs.form.howDidYouHearAboutTelnyx().type(contactUs.randomText());
  contactUs.form.subscriptionCheckbox().check();
  contactUs.form.submitBtn().click();
  contactUs.form.submitBtn().should("have.text", "Please Wait");
  cy.wait(5000);
  contactUs.form.successTitle().should("be.visible");
});
