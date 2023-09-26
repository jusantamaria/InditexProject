import {google} from '../../support/pages/google.Page';
import the from '../../fixtures/data.json';
import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();

describe('Automatización de una web', () => {
    beforeEach('Buscar en Google el criterio Automatización', () => {
        cy.visit('https://www.google.com/');
        google.get.buscador().type('Automatización {enter}');
        cy.scrollTo(0,500);
        cy.get('h3').contains('Automatización - Wikipedia, la enciclopedia libre').click({force:true});
        cy.url().should('eq', the.endpoint.automatizacion);
    });
    it('Verificar el año del primer proceso automatizado',()=>{
        cy.contains('primer proceso industrial completamente automatizado.')
        .should('contain.text','Oliver Evans en 1785')
        .and('be.visible');
        cy.screenshot();
    });
});