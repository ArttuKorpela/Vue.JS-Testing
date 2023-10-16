import ButtonComponent from '@/components/v-if-else-if.vue'

describe('ButtonComponent', () => {

  beforeEach(() => {
    cy.mount(ButtonComponent)
  })

  it("renders 'Nothing' initially", () => {
    cy.contains('Nothing').should('exist')
  })

  it("renders button clicks and their correct outputs", () => {
    cy.get('button').click()

    cy.contains('Button has been pressed once').should('exist')

    cy.get('button').click()

    cy.contains('Button has been pressed multiple times').should('exist')
  })

})