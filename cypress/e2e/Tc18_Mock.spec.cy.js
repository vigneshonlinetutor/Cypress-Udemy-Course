/// <reference types="Cypress" />

describe('Mock Testing',function(){

    beforeEach(function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type('cypressdemo@gmail.com')
        cy.get('input[type="password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
    })

    it('Tag Mock',function(){
        cy.intercept('GET','/api/tags',{fixture:'Tags.json'})
        cy.contains('Your Feed').should('be.visible')
        cy.get('.tag-list').should('contain','cypress').and('contain','udemy').and('contain','course')
    })

    it('Article Mock',function(){
        cy.intercept('GET','/api/articles/*',{fixture:'Article.json'})
        cy.contains('Your Feed').should('be.visible')
        cy.contains('Global Feed').click()
        cy.get('.col-md-9').should('contain','Demo Mock Cypress')
    })

    it('Login User Mock',function(){
        cy.intercept('POST','/api/users/login',{fixture:'Login.json'})
        cy.get('a[href^="#@"]').should('contain','Vignesh-Udemy-Instructor')
    })

})