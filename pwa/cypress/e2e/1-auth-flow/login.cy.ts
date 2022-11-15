/// <reference types="cypress" />

describe('go to login', () => {
  it('should find login', () => {
    cy.visit('http://localhost:5173/auth/login')
    cy.get('h2').contains('Login')
  })
})