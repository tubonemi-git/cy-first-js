Cypress.Commands.add('verifyResultSet', (item) => {
    cy.fixture('elements.json').then((locator) => {
        cy.get(locator.results_header).should('be.visible')
            .invoke('text').then((newValue) => {
                const result = newValue
                expect(result).to.include('results for')

            })
    })

    cy.fixture('elements.json').then((locator) => {
        cy.get(locator.item_header).should('be.visible')
            .invoke('text').then((newValue) => {
                const result = newValue
                expect(result).to.include(item)

            })
    })
})