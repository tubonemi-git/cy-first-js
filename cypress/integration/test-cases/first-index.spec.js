describe('describe it here', () => {

    it('the main it-block inside the describe block', () => {
        // you can launch the site by uncommenting the line below and clicking on the file in the cypress runner
        // cy.visit('https://www.amazon.com')

        //alternatively you can just use the line below without the URL but launch by using the cypress.json file
        // cypress.json allows you to change the configuration of the cypress runner.

        cy.visit('/')
        cy.get('#twotabsearchtextbox').type('Merino Wool')
        cy.get('input#nav-search-submit-button').click()


    })
    // you can skip an it-block by adding an 'x' before 'it' e.g. xit or using skip e.g. it.skip
    it.skip('testing a skipped it block', () => {
        cy.visit('https://www.saucedemo.com/v1/')

    })
    //you can also use it.only to run just this it-block
    it.skip('testing it.only block', () => {
        cy.visit('https://demoqa.com/')
    })
})

