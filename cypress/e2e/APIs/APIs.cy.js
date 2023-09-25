const soldPets = 'cypress/fixtures/pets.json';

describe('Tratamiento de datos en APIs',()=>{
    it('Crear un usuario y obtener sus datos',()=>{
        cy.fixture('user').then((data)=> {
            const reqBody=data;
            cy.request({
                method: 'POST',
                url:'https://petstore.swagger.io/v2/user',
                body:reqBody
            }).then((respuesta)=>{
                expect(respuesta.status).to.eq(200)
        })
        cy.request({
            method:'GET',
            url:'https://petstore.swagger.io/v2/user/Julian05',
            body: reqBody
        }).then((respuesta)=>{
            expect(respuesta.status).to.eq(200)
            expect(respuesta.body.username).to.eq(reqBody.user.username);
            expect(respuesta.body.firstName).to.eq(reqBody.user.firstName);
            expect(respuesta.body.lastName).to.eq(reqBody.user.lastName);
            expect(respuesta.body.email).to.eq(reqBody.user.email);
            expect(respuesta.body.password).to.eq(reqBody.user.password);
            expect(respuesta.body.phone).to.eq(reqBody.user.phone);
            cy.log(JSON.stringify(respuesta.body))
        })
        })
    })

    it('Recoger datos de mascotas vendidas y listarlas por id y name', ()=>{
        cy.request('GET','https://petstore.swagger.io/v2/pet/findByStatus?status=available')
        .then((respuesta)=>{
            expect(respuesta.status).to.eq(200)
        })
        cy.request('GET','https://petstore.swagger.io/v2/pet/findByStatus?status=pending')
        .then((respuesta)=>{
            expect(respuesta.status).to.eq(200)
        })
        cy.request('GET','https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
        .then((respuesta)=>{
            expect(respuesta.status).to.eq(200)
            cy.log(JSON.stringify(respuesta.body))
            cy.writeFile(soldPets, respuesta.body)
        })
        cy.fixture('pets').then((pets)=>{
            const nuevaLista = pets.map((el)=>{
                return{
                    id: el.id,
                    name: el.name
                }
            })
            cy.log('Lista de mascotas vendidas:',JSON.stringify(nuevaLista))
        })
        
    })

    it('Verificar la cantidad de mascotas por nombre',()=>{   
        cy.request('GET','https://petstore.swagger.io/v2/pet/findByStatus?status=sold').then((respuesta) => {
            expect(respuesta.status).to.equal(200); 
            cy.log(JSON.stringify(respuesta.body))
            })
            cy.fixture('pets').then((pets)=>{
                function cantidadDeNombres(pets) {
                    const nombreQty = {};

                    pets.forEach(($e) => {
                        const nombre = $e.name;
                        if (nombreQty[nombre]) {
                        nombreQty[nombre]++;
                        } else {
                        nombreQty[nombre] = 1;
                    }
                });
            const nombresCantidad = Object.keys(nombreQty).map((nombre) => ({
                nombre,
                cantidad: nombreQty[name],
            }));
            return nombresCantidad;
            }
            const nombresCantidad = cantidadDeNombres(pets);
            cy.log('Cantidad de nombres:',JSON.stringify(nombresCantidad))
        })   
    })
})
