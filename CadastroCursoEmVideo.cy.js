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
    it('Verificar mensagens de email invalido',()=>{
        cy.contains('a','Cadastre-se').click();
        cy.contains('button','Registrar Gratuitamente').click();
        cy.get('input[name="user_email"]').type('Leonardo');
        cy.contains('span','Preencha com e-mail válido.').should('be.visible');
        
    })
    it('Verificar senha com menos de 8 caracteres',()=>{
        cy.contains('a','Cadastre-se').click();
        cy.contains('button','Registrar Gratuitamente').click();
        cy.get('input[name="user_pass"]').type('1234567');
        cy.contains('div','Muito fraca').should('be.visible');
        cy.contains('button','Registrar Gratuitamente').click();
        cy.contains('span','Your password should be at least 8 characters long.').should('be.visible');
    
    })
    const usuarios = require('../../fixtures/usuarios.json'); // constante p/ guardar a biblioteca json de usuarios.
    usuarios.forEach(usuario =>{ // função forEach para um laço de repetição da constante usuarios
        it(`Registrar usuario ${usuario.NomeUsuario}`,()=>{
            cy.contains('a','Cadastre-se').click();
            cy.get('input[name="first_name"]').type(usuario.first_name);
            cy.get('input[name="last_name"]').type(usuario.last_name);
            cy.get('input[name="user_email"]').type(usuario.user_email);
            cy.get('input[name="user_pass"]').type(usuario.user_pass);
            cy.get('input[name="confirm_user_pass"]').type(usuario.confirm_user_pass);
            cy.contains('button','Registrar Gratuitamente').click();
        })
    })

})