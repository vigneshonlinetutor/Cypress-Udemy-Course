/// <reference types="Cypress" />

import landingPage from "./pages/landingPage"

describe('POM Test',function(){

    beforeEach(function(){
        cy.fixture('ConduitData').as('data')
    })

    it('Conduit Login using POM',function(){
        cy.visit('/')
        landingPage.clickSigninButton()
        .enterEmail(this.data.email)
        .enterPassword(this.data.password)
        .clickSigninButton()
        .checkYourFeedIsVisible()
        .clickSettingsButton()
        .clickLogoutButton();
    })
})