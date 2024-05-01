/// <reference types="cypress" />
import contactUs from "../../../pages/contactUs.page";
import randomUtils from "../../../../utils/random.utils"

it("TC_08_Verify the contact us form with valid data", () => {
  contactUs.visit();

  contactUs.form.title().should("be.visible");
  contactUs.form.howCanWeHelp().select("Sales-Inquiry");
  contactUs.form.firstName().type(randomUtils.randomFirstName());
  contactUs.form.lastName().type(randomUtils.randomLastName());
  contactUs.form.email().type(randomUtils.randomEmail());
  contactUs.form.country().select("+380");
  contactUs.form.phoneNumber().type(randomUtils.randomPhooneNumber());
  contactUs.form.companyWebsite().type(randomUtils.randomText());
  contactUs.form.primaryInterest().select("AI / Inference");
  contactUs.form.budget().select("$500 - $1000");
  contactUs.form.howDoYouPlan().type(randomUtils.randomText());
  contactUs.form.howDidYouHearAboutTelnyx().type(randomUtils.randomText());
  contactUs.form.subscriptionCheckbox().check();
  contactUs.form.submitBtn().click();
  contactUs.form.submitBtn().should("have.text", "Please Wait");
  cy.wait(5000);
  contactUs.form.successTitle().should("be.visible");


  
});
