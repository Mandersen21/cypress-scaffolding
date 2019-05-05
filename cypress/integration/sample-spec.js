describe('DFDS booking flow', function() {
    beforeEach(function() {
        cy.visit('https://ferry.dfdsseaways.com/');
      });
    
    it('contains "Ferry booking" in the title', function() {
        cy.title().should('contain', 'Ferry booking');
    });
});