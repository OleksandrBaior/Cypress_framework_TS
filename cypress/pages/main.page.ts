import basePage from "./base.page";

class mainPage extends basePage {
  navigationBar = {
    productsBtn: () => cy.get('[id*="radix-:Rkljm:"]'),
    solutionBtn: () => cy.get('nav > a[href="/solutions"').first(),
    pricingBtn: () => cy.get('[id*="radix-:Rlljm:"]'),
    whyTelnuxBtn: () => cy.get('[id*="radix-:Rm5jm:"]'),
    resoursesBtn: () => cy.get('[id*="radix-:Rmljm:"]'),
    developersBtn: () => cy.get('[id*="radix-:Rn5jm:"]'),
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
