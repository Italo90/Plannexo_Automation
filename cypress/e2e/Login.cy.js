const user = require('../fixtures/user.json')

describe('Realização de Login', () => {

  context('Usuário Logando corretamente a partir da escolha de uma company', function () {

    before(() => {
      cy.Url();
    })

    it('Dado que o Usuário ao prencher o campo E-mail corretamente', () => {
      cy.Email().type(user.email)
    })

    it('E aciona o botão "Próximo"', () => {
      cy.BtProximo().click()
    })

    it('Quando o usuário preenche o campo "Senha" corretamente', () => {
      cy.Senha().type(user.senha)
    })

    it('E aciona o botão "Entrar"', () => {
      cy.BtEntrar()
        .should('have.text', ' Entrar ')
        .click()
    })

    it('E o usuário é encaminhado a pagina onde poderá escolher uma empresa', () => {
      cy.SelectEmpresa()
        .select('99999999992 - Hospital Bionexo', { timeout: 20000 }).should('have.value', '999003')
      cy.BtContinuar()
        .should('have.text', ' Continuar ')
        .click()
    })

    it('Então o usuário conseguira logar e visualizará o Dashboard com o nome da empresa escolhida', () => {
      cy.get('div h4', { timeout: 20000 }).should('be.visible')
      cy.get('#dropdownMenuLink').should('be.visible')
    })

  })

  context('Usuário Logando corretamente que não possui uma company', function () {

    before(() => {
      cy.Url();
    })

    it('Dado que o Usuário ao prencher o campo E-mail corretamente', () => {
      cy.Email().type(user.emailsmulti)
    })

    it('E aciona o botão "Próximo"', () => {
      cy.BtProximo().click()
    })

    it('Quando o usuário preenche o campo "Senha" corretamente', () => {
      cy.Senha().type(user.senha)
    })

    it('E aciona o botão "Entrar"', () => {
      cy.BtEntrar()
        .should('have.text', ' Entrar ')
        .click()
    })

    it('Então o usuário conseguira logar e visualizará o Dashboard', () => {
      cy.get('div h4', { timeout: 20000 }).should('be.visible')
      cy.get('#dropdownMenuLink').should('be.visible')
    })

  })

  context('Usuário Logando com email invalido', function () {

    before(() => {
      cy.Url();
    })

    it('Dado que o Usuário ao prencher o campo E-mail com valor incorreto', () => {
      cy.Email().type(user.emailinvalido)
    })

    it('E aciona o botão "Próximo"', () => {
      cy.BtProximo().click()
    })

    it('Então o sistema devera informa a mensagem "Não foi possivel encontrar este e-mail"', () => {
      cy.ValidarMsgInvalido().should('have.text', 'Não foi possível encontrar este e-mail')
    })
  })

  context('Usuário Logando com senha invalida', function () {

    before(() => {
      cy.Url();
    })

    it('Dado que o Usuário ao prencher o campo E-mail com valor incorreto', () => {
      cy.Email().type(user.email)
    })

    it('E aciona o botão "Próximo"', () => {
      cy.BtProximo().click()
    })

    it('Quando o usuário preenche o campo "Senha" com valor incorreto', () => {
      cy.Senha().type(user.senhaInvalida)
    })

    it('E aciona o botão "Entrar"', () => {
      cy.BtEntrar()
        .should('have.text', ' Entrar ')
        .click()
    })

    it('Então o sistema devera informa a mensagem "Senha incorreta. Tente novamente ou clique em "Esqueceu a senha?" para redefini-la"', () => {
      cy.ValidarMsgInvalido().should('have.text', 'Senha incorreta. Tente novamente ou clique em "Esqueceu a senha?" para redefini-la')
    })
  })
})