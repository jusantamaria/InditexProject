class Google {
    get = {
        buscador: () => cy.get('#APjFqb'),
        aceptarCookies:()=> cy.get('#L2AGLb > .QS5gu'),
        // resultado:()=> cy.get('h3[class="LC20lb MBeuO DKV0Md"]')

    }
    cookies(){
        this.get.aceptarCookies().click();
    }

    buscar(type){
        this.get.buscador().type(type);
    }

    resultadoWiki(){
        this.get.resultado().contains('Automatización - Wikipedia, la enciclopedia libre').click({force:true});
    }

}

export const google = new Google();