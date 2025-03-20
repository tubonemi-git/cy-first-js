Cypress.Commands.add('searchTextBox', (item) => {
    cy.fixture('elements.json').then((locator) => {
        cy.get(locator.textSearchBox).should('be.visible').type(item)
    })
})

Cypress.Commands.add('clickButton', () => {
    cy.fixture('elements.json').then((locator) => {
        cy.get(locator.searchButton).should('be.visible').click()
    })
})
