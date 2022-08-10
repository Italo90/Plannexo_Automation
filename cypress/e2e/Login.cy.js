const user = require('../fixtures/user.json')

describe('Realização de Login', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err) => {
      return true;
    })
  })

  context('Usuário Logando corretamente', function (){

    before(() => {
      cy.Url()
    })

    it('Dado que o Usuário ao prencher o campo E-mail corretamente', () => {
      cy.Email().type(user.email)
    })

    it('E aciona o botão "Próximo"',() =>{
      cy.BtProximo().click()
    })

    it('Quando o usuário preenche o campo "Senha" corretamente',() => {
      cy.Senha().type(user.senha)
    })

    it('E aciona o botão "Entrar"',() =>{
      cy.BtEntrar().click()

    })

    it('E o usuário é encaminhado a pagina onde poderá escolher uma empresa', () => {
      cy.SelectEmpresa()
    })

    // it('E aciona o botão o "Continuar" ',() =>{
    //    cy.BtnContinuar().click()
    // })

    // it('Então o usuário conseguira logar e visualizará o Dashboard com o nome da empresa escolhida', () =>{

    // })

  })
})