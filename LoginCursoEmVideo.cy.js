describe('Validação de Login',()=>{
    beforeEach(()=>{
        cy.visit('https://www.cursoemvideo.com/')
        cy.intercept('POST','https://www.cursoemvideo.com/',{
            statusCode: 400
        }).as('stubPost')
    })
    it('Verificando login invalido',()=>{
       cy.login('Leonardo','12345678');
       cy.on ('window:alert',(str)=>{
        expect(str).to.equal('Error: The Username you have entered is Invalid')
       })

    }) 
    it('Verificando login valido',()=>{
        cy.login(Cypress.env('userName'),Cypress.env('password'));
        cy.wait('@stubPost')
        cy.contains('a','Meu Painel').should('be.visible');
    }) 
    
})