describe('Validação de Login',()=>{
    beforeEach(()=>{
        cy.visit('https://www.cursoemvideo.com/')
    })
    it('Verificando login invalido',()=>{
       cy.login('Leonardo','12345678');
       cy.on ('window:alert',(str)=>{
        expect(str).to.equal('Error: The Username you have entered is Invalid')
       })

    }) 
    it('Verificando login valido',()=>{
        cy.login('leonardoluz10@hotmail.com','HBalcasa18@');
        cy.contains('a','Meu Painel').should('be.visible');
    }) 
    
})