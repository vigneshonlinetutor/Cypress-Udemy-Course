/// <reference types="Cypress" />

class BasePage {
    // Common method to navigate to a URL
    navigateTo(url) {
        cy.visit(url);
    }

    // Common method to click an element
    clickElement(locator, useContains = false) {
        if (useContains) {
            cy.contains(locator).click();
        } else {
            cy.get(locator).click();
        }
    }

    // Common method to fill out a text box field
    fillText(locator, textToEnter, useContains = false) {
        if (useContains) {
            cy.contains(locator).type(textToEnter);
        } else {
            cy.get(locator).type(textToEnter);
        }
    }

    // Common method to retrieve text from an element
    getElementText(locator, useContains = false) {
        if (useContains) {
            return cy.contains(locator).getElementText('text');
        } else {
            return cy.get(locator).getElementText('text');
        }
    }

    // Common method to wait for an element to be visible
    waitForElementVisible(locator, useContains = false) {
        if (useContains) {
            cy.contains(locator).should('be.visible');
        } else {
            cy.get(locator).should('be.visible');
        }
    }

    // Common method to assert if an element to be visible
    isElementVisible(locator, useContains = false) {
        if (useContains) {
            return cy.contains(locator).should('be.visible');
        } else {
            return cy.get(locator).should('be.visible');
        }
    }
}

export default BasePage;