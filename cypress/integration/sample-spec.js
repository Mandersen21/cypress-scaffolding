describe("DFDS booking flow", function() {
  before(function() {});
  
  it("It should open page", function() {
    cy.visit("https://ferry.dfdsseaways.com/");  
  });

  it("It should test travel step", function() {
    cy.get(".travel-container").should("be.visible");
    cy.get(".flow-container.is-loading.active").should("not.exist");
    cy.get("#SubmitContinue").click();
  });

  it("It should test cabin-fares step", function() {
    cy.get(".cabin-fares-container").should("be.visible");
    cy.get(".flow-container.is-loading.active").should("not.exist");
    cy.get("#SubmitContinue").click();
  });

  it("It should test meals step", function() {
    cy.get(".meals-container").should("be.visible");
    cy.get(".flow-container.is-loading.active").should("not.exist");
    cy.get("#SubmitContinue").click();
  });
});
