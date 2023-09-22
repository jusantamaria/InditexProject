Cypress.Commands.add('goToPage', () =>{
    cy.visit('http://petstore.swagger.io/v2/user', {
        failOnStatusCode: false,
        headers: {
            "Connection": "keep-alive",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
            "accept": "/",
            "accept-encoding": "gzip, deflate",
            "referer": "http://petstore.swagger.io/v2/user"
        },
    });
});
