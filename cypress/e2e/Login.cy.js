const user = require('../fixtures/user.json')

describe('Realização de Login', () => {
  cy.on('uncaught:exception', (err) => {
    return true;
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

    // it('E o usuário seleciona uma empresa pertencente ao seu cadastro', ()=> {
    //   cy.SelectEmpresa()
    // })


  })
})