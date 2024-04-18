import basePage from "./base.page";

class mainPage extends basePage {
  contactWithUsElements = {
    tiltleSection: () => cy.get('.c-plaCa > .c-gdniMJ > .c-fNZqWL'),
    tiltle: () => cy.get('.c-plaCa > .c-gdniMJ > .c-fKwEGa'),
    subTitle: () => cy.get('.c-plaCa > .c-gdniMJ > .c-PJLV-ghYBfS-lead-true'),
    emailInput: () => cy.get('#email'),
    submitBtn: () => cy.get('.c-eXJNdE-cZntuR-desktop-true > .c-kDQqQr'),
    description: () => cy.get('.c-hRNdXV > .c-deTVua'),
    privacyPolicyLink: () => cy.get('[href="/privacy-policy"] > .c-khZXrc > .c-PJLV'),
    termsAndCondition: () => cy.get('[href="/terms-and-conditions"] > .c-khZXrc > .c-PJLV')
  };
}

export default new mainPage();
