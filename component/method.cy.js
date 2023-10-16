import Counter from '@/components/watcher.vue'

describe('watcher.vue', () => {

  beforeEach(() => {
    cy.mount(Counter)
  })

  it('Check that a button increments the count', () => {
    cy.wrap(Cypress.vue).its('count').should('eq', 0)

    cy.get('button').click()

    cy.wrap(Cypress.vue).its('count').should('eq', 1)
  })

  it('Check that the increment matches the button presses', () => {
    for (let i = 0; i < 100; i++) {
      cy.get('button').click()
    }

    cy.wrap(Cypress.vue).its('count').should('eq', 100)
  })

})