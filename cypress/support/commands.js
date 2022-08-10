// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
const user = require('../fixtures/user.json')

Cypress.Commands.add("Url",() => {
    cy.visit('/', {failOnStatusCode: false})
    //cy.get('#onetrust-accept-btn-handler', { timeout: 30000 }).should('have.text','Aceitar todos os cookies').click()
  })

Cypress.Commands.add("Email",() => {
    cy.get('#email')
})

Cypress.Commands.add("Senha",() => {
    cy.get('#password', { timeout: 20000 })
})

Cypress.Commands.add("BtProximo",() =>{
    cy.get('button[class="btn btn-primary"]')
})

Cypress.Commands.add("BtEntrar",() =>{
    cy.get('button[class="btn btn-primary"]')
})

Cypress.Commands.add("BtContinuar",() =>{
    cy.get('button[id="multicompanies-button-continue"]')
})

Cypress.Commands.add("SelectEmpresa",() =>{
    cy.get('#multicompanies-select', { timeout: 30000 })
    .should('be.visible')

})


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })