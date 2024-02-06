/// <reference types="Cypress" />

describe('Advanced UI Elements',function(){

    it('Iframes',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function($iframe){
            //Adding Wait for page to load fully
            cy.wait(500)
            const frame = $iframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type("Hello")
        })
    })
})