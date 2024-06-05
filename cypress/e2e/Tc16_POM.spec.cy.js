/// <reference types="Cypress" />

import landingPage from "./pages/landingPage"
import loginPage from "./pages/loginPage"
import homePage from "./pages/homePage"
import settingsPage from "./pages/settingsPage"

describe('POM Test',function(){

    beforeEach(function(){
        cy.fixture('ConduitData').as('data')
    })

    it('Conduit Login using POM',function(){
        cy.visit('/')
        landingPage.clickSigninButton()
        loginPage.enterEmail(this.data.email)
        loginPage.enterPassword(this.data.password)
        loginPage.clickSigninButton()
        homePage.checkYourFeedIsVisible()
        homePage.clickSettingsButton()
        settingsPage.clickLogoutButton()
    })
})