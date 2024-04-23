import { faker } from "@faker-js/faker";

class basePage {
  cookiesElements = {
    cookieModal: () => cy.get("#onetrust-banner-sdk"),
    readMoreLink: () => cy.get("#onetrust-policy-text > a"),
    titleReadMorePage: () => cy.get('[class*="c-PJLV c-fGbiyG"]'),
    cookiesSettingsBtn: () => cy.get("#onetrust-pc-btn-handler"),
    cookiesSettingsModal: () => cy.get("#onetrust-pc-sdk > div"),
    cookiesSettingsCloseBtn: () => cy.get("#close-pc-btn-handler"),
    allowAllBtn: () => cy.get("#accept-recommended-btn-handler"),
    performanceCookies: () => cy.get("#ot-group-id-C0002"),
    functionalCookies: () => cy.get("#ot-group-id-C0003"),
    targettingCookies: () => cy.get("#ot-group-id-C0004"),
    confirmMyChoiceBtn: () => cy.get(".save-preference-btn-handler"),
    acceptAllBtn: () => cy.get("#onetrust-accept-btn-handler"),
    closeBtn: () => cy.get(".onetrust-close-btn-handler"),
  };

  visit() {
    cy.visit("/");
  }
  randomFirstName() {
    return faker.person.firstName();
  }
  randomLastName() {
    return faker.person.middleName();
  }
  randomEmail() {
    return faker.internet.email();
  }
  randomPhooneNumber(){
    return faker.string.numeric(7)
  }
  randomText(){
    return faker.lorem.word(5)
  }
}

export default basePage;
