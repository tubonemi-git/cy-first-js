
describe('main index file', () => {

    /**   testing commands without fixtures redirect
    
    it('visit amazon', () => {
        cy.visit('/')
        cy.newField("cadbury")
        cy.clickIt()
    })
    */

    it('visit amazon', () => {
        //cy.visit('/')
        cy.fixture('elements.json').then((locator) => {
            cy.searchTextBox(locator.wool)
            cy.clickButton()
            cy.verifyResultSet(locator.wool)


        })

    })

    it.skip('visit amazon again', () => {
        //cy.visit('/')
        cy.fixture('elements.json').then((locator) => {
            cy.searchTextBox(locator.switch)
            cy.clickButton()
        })
    })

    it.skip('visits amazon the third time', () => {
        //cy.visit('/')
        cy.fixture('elements.json').then((locator) => {
            cy.searchTextBox(locator.racket)
            cy.clickButton()
        })


    })

















})