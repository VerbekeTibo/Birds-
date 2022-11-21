describe('Check if user can create an account (register)', () => {
  it('should be able to visit register', () => {
    cy.visit(`${Cypress.env('APP_URL')}/auth/register`)
  })
  it('should be able to fill out the form', () => {
    cy.get('[data-cy="name"]').type(Cypress.env('USER'))
    cy.get('[data-cy="email"]').type(Cypress.env('EMAIL'))
    cy.get('[data-cy="password"]').type(Cypress.env('PASSWORD'))
    cy.get('[data-cy="register"]').click()


  })
  it('should be able to see the user name in the header (login)', () => {
    cy.url().then((url) => {
      cy.get('[data-cy="home"]').contains("Home")
      cy.get('[data-cy="user-name"]').contains(Cypress.env('USER'))
    }
    )


  })
})
