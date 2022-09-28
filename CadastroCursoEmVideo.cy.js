describe('Validação de cadastro',()=>{
    beforeEach(()=>{
        cy.visit('https://www.cursoemvideo.com/')
    })
    it('Verificar mensagens de validação de cadastro',()=>{
        cy.contains('a','Cadastre-se').click();
        cy.contains('button','Registrar Gratuitamente').click();
        cy.contains('span','Campo obrigatório.').should('be.visible');
        cy.contains('span','This field is required.').should('be.visible');
        cy.contains('span','Preencha com e-mail válido.').should('be.visible');
        cy.contains('span','Campo obrigatório.').should('be.visible');
        cy.contains('span','Campo obrigatório.').should('be.visible');
    })
    it.only('Verificar mensagens de email invalido',()=>{
        cy.contains('a','Cadastre-se').click();
        cy.contains('button','Registrar Gratuitamente').click();
        cy.get('input[name="user_email"]').type('Leonardo');
        cy.contains('span','Preencha com e-mail válido.').should('be.visible');
        
    })


})