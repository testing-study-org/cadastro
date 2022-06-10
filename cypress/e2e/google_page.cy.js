const url = "http://google.com";
const title = 'Google';

describe('Access google page', ()=>{
    it('Check Title', () => {
        cy.visit(url)
        cy.title().should('eq',title)
    })

})