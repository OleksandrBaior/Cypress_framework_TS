/// <reference types="cypress" />

describe("TS_01_Verify cookie pop-up", () => {
  it("TC_02_Verify cookie pop-up in case allowing every option separately", () => {
    cy.visit("https://telnyx.com");
    cy.get("#onetrust-banner-sdk").should("be.visible");



    cy.get("#onetrust-pc-btn-handler").click();
  



    // cy.get("#accept-recommended-btn-handler").click();
    // cy.get("[class='ot-floating-button__open']").should("be.visible");

    // cy.get("[class='ot-floating-button__open']").click();
    // cy.get("#ot-group-id-C0002").should('be.checked');
    // cy.get("#ot-group-id-C0003").should('be.checked');
    // cy.get("#ot-group-id-C0004").should('be.checked');
  });
});
