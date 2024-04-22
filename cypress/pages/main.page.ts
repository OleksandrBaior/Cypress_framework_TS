import basePage from "./base.page";

class mainPage extends basePage {
  navigationBar = {
    // navBar: () =>  cy.get('[class="c-buvHyO c-buvHyO-igBHaYk-css c-dFcuQt"]'),
    productsBtn: () => cy.get('[id*="radix-:Rkljm:"]'),
    productsModal: () => cy.get(".c-inDTpq"),
    solutionBtn: () => cy.get(".c-buvHyO-igBHaYk-css > .c-fSFmQG > a.c-ewUecD"),
    pricingBtn: () => cy.get("#radix-:Rlljm: > .c-ewUecD > .c-khZXrc > .c-PJLV"),
    pricingModal: () => cy.get(".c-inDTpq"),
    whyTelnuxBtn: () => cy.get('#radix-\:Rm5jm\: > .c-ewUecD'),
    whyTelnuxModal: () => cy.get('.c-inDTpq'),
    resoursesBtn: () => cy.get('#radix-\:Rmljm\: > .c-ewUecD'),
    resoursesModal: () => cy.get('.c-inDTpq'),
    developersBtn: () => cy.get('#radix-\:Rn5jm\:'),
    developersModal: () => cy.get('.c-inDTpq')
  };

  contactWithUsElements = {
    tiltleSection: () => cy.get(".c-plaCa > .c-gdniMJ > .c-fNZqWL"),
    tiltle: () => cy.get(".c-plaCa > .c-gdniMJ > .c-fKwEGa"),
    subTitle: () => cy.get(".c-plaCa > .c-gdniMJ > .c-PJLV-ghYBfS-lead-true"),
    emailInput: () => cy.get("#email"),
    submitBtn: () => cy.get(".c-eXJNdE-cZntuR-desktop-true > .c-kDQqQr"),
    description: () => cy.get(".c-hRNdXV > .c-deTVua"),
    privacyPolicyLink: () => cy.get('[href="/privacy-policy"] > .c-khZXrc > .c-PJLV'),
    termsAndCondition: () => cy.get('[href="/terms-and-conditions"] > .c-khZXrc > .c-PJLV'),
  };
}

export default new mainPage();
