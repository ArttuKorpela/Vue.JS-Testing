import MyComponent from '@/components/ButtonComponent.vue'

describe('YourComponentName.vue', () => {

  beforeEach(() => {
    cy.mount(MyComponent)
  })

  it('calls Do nothing when button is clicked, doesnt activate the div method', () => {
    cy.get('button').click()

    cy.wrap(Cypress.vue).its('message').should('eq', "Nothing was done")
  })

  it('Clicking a doesnt follow ref', () => {
    cy.get('a').click()

    cy.wrap(Cypress.vue).its('message').should('eq', "Clicked")
  })

})