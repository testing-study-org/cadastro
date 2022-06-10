const faker = require('faker-br');
import 'cypress-file-upload';

let baseUrl = 'http://localhost:3000/';
// const name = 'Isaac Silva'
let name = faker.name.findName()
const email = 'admin@gmail.com';
const password = 'SenhaF0rte!';
const cvFile = '../e2e/files/isaac_cv.pdf';


describe('Upload CV', () => {

    it('Should open CV page', () => {
        // cy.url( { timeout: 10000 }).should('contains', '/')
        cy.visit(`${baseUrl}`)
        cy.title().should('eq','Cadastro - Processo Seletivo')

        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        
        cy.get('input[id="male"]').first().click()
        
        cy.get('input[id="cv-file"]')
        .as('fileInput')
        .attachFile(cvFile)

        cy.get('select').eq(0).select(1)

        cy.get('input[type="checkbox"').first().click()
        
        cy.get('button').should('have.class', 'btn-primary').last().click()
    })

})

