/// <reference types="Cypress" />

describe('Radio Button Functionality',function(){

    it('Handling different radio button',function(){

        //Basic Radio Button
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/')
        cy.get('#radio-choice-0a').should('not.be.checked').click({force: true})
        cy.get('#radio-choice-0b').should('not.be.checked').click({force: true})

        //Modern Radio button
        cy.get('#radio-choice-h-2b').should('not.be.checked').click({force: true})
        cy.get('#radio-choice-h-2c').should('not.be.checked').click({force: true})
    })
})