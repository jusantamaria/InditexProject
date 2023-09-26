Cypress.Commands.add('aceptarCookies', () => {
    cy.find('.jw8mI', { failOnStatusCode: false }).then(($element) => {
        if ($element.length) {
        cy.get('.jw8mI').should('contain.text','Antes de ir a Google') 
        } else {

        }
        cy.get('#L2AGLb > .QS5gu').click(); 
    });
});