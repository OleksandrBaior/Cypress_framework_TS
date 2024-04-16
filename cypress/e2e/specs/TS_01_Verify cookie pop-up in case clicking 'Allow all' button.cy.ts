/// <reference types="cypress" />

describe("Verify cookie pop-up in case clicking 'Allow all' button", () => {
  it("Verify cookie pop-up in case clicking 'Allow all' button", () => {
    cy.visit("https://telnyx.com");
    // cy.get(".todo-list li").should("have.length", 2);
    // cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
    // cy.get(".todo-list li").last().should("have.text", "Walk the dog");
  });

//   it("can add new todo items", () => {
//     const newItem = "Feed the cat";
//     cy.get("[data-test=new-todo]").type(`${newItem}{enter}`);

//     cy.get(".todo-list li")
//       .should("have.length", 3)
//       .last()
//       .should("have.text", newItem);
//   });
});
