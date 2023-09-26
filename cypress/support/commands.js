Cypress.Commands.add('aceptarCookies', () => {
    cy.get('.jw8mI', { timeout: 5000 })
    .should('be.visible') 
    .then(($popup) => {
        if ($popup.find('#L2AGLb > .QS5gu').length > 0) {
        cy.get('#L2AGLb > .QS5gu').click(); 
        }
        else(() => {
            // Si el pop-up de cookies no está presente, no hagas nada
        });
    })
});
