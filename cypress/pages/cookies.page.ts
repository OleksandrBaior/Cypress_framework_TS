import MainPage from "./main.page";

class CookiesPage extends MainPage {
  elements = {
    cookieModal: () => cy.get("#onetrust-banner-sdk"),
    readMoreLink: () => cy.get("#onetrust-policy-text > a"),
    titleReadMorePage: () => cy.get('[class*="c-PJLV c-fGbiyG"]'),
    cookiesSettingsBtn: () => cy.get("#onetrust-pc-btn-handler"),
    cookiesSettingsModal: () => cy.get("#onetrust-pc-sdk > div"),
    cookiesSettingsCloseBtn: () => cy.get("#close-pc-btn-handler"),
    cookiesSettingsIcon: () => cy.get("[class='ot-floating-button__open']"),
    allowAllBtn: () => cy.get("#accept-recommended-btn-handler"),
    performanceCookies: () => cy.get("#ot-group-id-C0002"),
    functionalCookies: () => cy.get("#ot-group-id-C0003"),
    targettingCookies: () => cy.get("#ot-group-id-C0004"),
    confirmMyChoiceBtn: () => cy.get(".save-preference-btn-handler"),
    acceptAllBtn: () => cy.get("#onetrust-accept-btn-handler"),
  };
}

export default CookiesPage;
