describe('Verificando itens de abertura da pagina inicial',()=>{
    beforeEach(()=>{
        cy.visit('https://www.cursoemvideo.com/')
    })
    it('Verificar mensagens de Menu Horizontal',()=>{
        cy.contains('a','Cursos').should('be.visible');
        cy.contains('a','Sobre').should('be.visible');
        cy.contains('a','Seja um apoiador').should('be.visible');
        cy.contains('a','Login').should('be.visible');
        cy.contains('a','Cadastre-se').should('be.visible');
        cy.contains('a','Validação de Certificado').should('be.visible');
        cy.contains('a','Hall da Fama').should('be.visible');
    })
    it('Verificar o itens do começar',()=>{
        cy.contains('span','Começar!').click();
        cy.contains('h3','Algoritmo [40 Horas]').should('be.visible');
        cy.contains('h3','PHP Básico [40 Horas]').should('be.visible');
        cy.contains('h3','Java Básico [40 Horas]').should('be.visible');
        cy.contains('h3','HTML5 [40 Horas]').should('be.visible');
        cy.contains('h3','PHP POO [40 Horas]').should('be.visible');
        cy.contains('h3','Java POO [40 Horas]').should('be.visible');
        cy.contains('h3','Word [40 Horas]').should('be.visible');
        cy.contains('h3','Photoshop [20 Horas]').should('be.visible');
        cy.contains('h3','Excel [40 Horas]').should('be.visible');
        cy.contains('h3','MySQL [40 Horas]').should('be.visible');
        cy.contains('h3','Marketing Digital [40 Horas]').should('be.visible');
        cy.contains('h3','Bases Numéricas [20 Horas]').should('be.visible');
        cy.contains('h3','Hardware [20 Horas]').should('be.visible');
        cy.contains('h3','Python 3 – Mundo 1 [40 Horas]').should('be.visible');
        cy.contains('h3','Python 3 – Mundo 2 [40 Horas]').should('be.visible');
        cy.contains('h3','Python 3 – Mundo 3 [40 Horas]').should('be.visible');
        cy.contains('h3','Linux [40 Horas]').should('be.visible');
        cy.contains('h3','Redes de Computadores [20 Horas]').should('be.visible');
        cy.contains('h3','Javascript [40 Horas]').should('be.visible');
        cy.contains('h3','WordPress Módulo 1 [40 Horas]').should('be.visible');
        cy.contains('h3','Raspberry Pi Básico [40 Horas]').should('be.visible');
        cy.contains('h3','Mautic [20 Horas]').should('be.visible');
        cy.contains('h3','WordPress Módulo 2 [40 Horas]').should('be.visible');
        cy.contains('h3','Git e GitHub [20 Horas]').should('be.visible');
        cy.contains('h3','Curso HTML5 e CSS3: módulo 1 de 5 [40 HORAS]').should('be.visible');
        cy.contains('h3','Adequando sites e lojas virtuais em WordPress à LGPD').should('be.visible');
        cy.contains('h3','Como anunciar na Internet').should('be.visible');
        cy.contains('h3','Curso HTML5 e CSS3: módulo 3 de 5 [40 HORAS]').should('be.visible');
        cy.contains('h3','Curso HTML5 e CSS3: módulo 4 de 5 [40 HORAS]').should('be.visible');
        cy.contains('h3','Curso Prático de SEO: Módulo 01').should('be.visible');
        cy.contains('h3','Segurança da Informação: Módulo 00 [20 HORAS]').should('be.visible');
        cy.contains('h3','Curso Prático de Redes de Computadores e Internet [20 HORAS]').should('be.visible');
        cy.contains('h3','Segurança da Informação: Módulo 01 [20 HORAS]').should('be.visible');
        cy.contains('h3','Curso de Endereçamento IPv4 [20 HORAS]').should('be.visible');        
    })
    it('Verificar itens do Sobre',()=>{
        cy.contains('span','Sobre').click();
        cy.contains('a','Seja um apoiador do Curso em Vídeo, remova os anúncios do site, tenha créditos para emissão de certificados e outros benefícios').should('be.visible');
        cy.contains('div','Lançado em 2013, o projeto de ensinar tecnologia à distância foi ganhando forma e hoje já conta com milhares de alunos inscritos e uma grande quantidade de material gratuito.').should('be.visible');
        cy.contains('div','O professor carioca Gustavo Guanabara sempre buscou criar aulas diferentes dentro da sua sala. Quando descobriu que poderia dar aulas para milhares de pessoas pela internet, criou seu primeiro curso de PHP em 2005. Desde aquela época, já teve mais de 8 milhões de downloads e colaborou para a formação de muitos programadores iniciantes.').should('be.visible');
        cy.contains('div','Em 2013, com o apoio principal da Hostnet, Guanabara iniciou seu projeto mais ambicioso: ensinar tecnologia através de um site que disponibilizasse cursos completos em vídeo, com novas aulas lançadas semanalmente. Ainda em 2013, foi lançado o Curso em Vídeo de HTML5 e no início de 2014, iniciou o Curso em Vídeo de Algoritmo. Ambos 100% gratuitos.').should('be.visible');
        cy.contains('div','Não encontrou o curso que procura? Amplie ainda mais seus conhecimentos com o Estudonauta!').should('be.visible');
    })
    it('Verificar itens do Seja um apoiador',()=>{
        cy.contains('span','Seja um apoiador').click();
        cy.contains('span','Quero ser um Apoiador!').should('be.visible');
        cy.contains('div','O CursoemVideo surgiu em 2012 quando o professor Gustavo Guanabara decidiu transformar algumas de suas aulas em um formato de vídeo com o objetivo de ajudar seus alunos em sala de aula. Em poucos meses, o formato se mostrou bem popular e começou a chegar em outras pessoas pelo mundo.').should('be.visible');
        cy.contains('div','Atualmente, são mais de 13 cursos grátis como Construção de Sites com HTML5, Lógica de Programação, PHP, Java, Banco de Dados, Programação Orientada a Objetos, Word, Excel, Marketing Digital, Python e Hardware. E tudo com um único objetivo: democratizar a Informática e provar que aprender programação ou qualquer outra disciplina técnica não é tão difícil quanto as pessoas pensam.').should('be.visible');
        cy.contains('span','Apoiar Agora!').should('be.visible');
        cy.contains('a','Apoiar Agora!').click();
    })
    it('Verificar itens do Login',()=>{
        cy.contains('span','Login').click();
        cy.contains('button','Entrar').should('be.visible');
        cy.contains('span','Entrar').should('be.visible');
        cy.contains('span','Lembrar-me').should('be.visible');
        cy.contains('a','Cadastrar').should('be.visible');
        cy.contains('a','Esqueceu a senha?').should('be.visible');
        
    })

    it('Verificar itens do Cadastro',()=>{
        cy.contains('span','Cadastre-se').click();
        cy.contains('label','Nome').should('be.visible');
        cy.contains('div','Campo obrigatório.').should('be.visible');
        cy.contains('label','Sobrenome').should('be.visible');
        cy.contains('div','This field is required.').should('be.visible');
        cy.contains('label','E-mail').should('be.visible');
        cy.contains('div','Preencha com e-mail válido.').should('be.visible');
        cy.contains('label','Senha').should('be.visible');
        cy.contains('label','Confirmar Senha').should('be.visible');
        cy.contains('button','Registrar Gratuitamente').should('be.visible');
       
    })



})