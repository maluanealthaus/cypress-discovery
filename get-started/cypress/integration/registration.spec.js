/// <reference types="cypress" />

describe('Registration', ()=>{
    it('User should be a deliver', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('a[href="/deliver"]').click()

        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    })
})