
import 'cypress-fill-command'

/** testing commands without fixtures redirect
 *
Cypress.Commands.add('newField', (something) => {
    cy.get("input#twotabsearchtextbox").type(something)
})

Cypress.Commands.add('clickIt', () => {
    cy.get("input#nav-search-submit-button").click(({ force: true }))
})

*/


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
//
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
