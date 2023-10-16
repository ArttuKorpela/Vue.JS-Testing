import Counter from '@/components/watcher.vue'

describe('watcher.vue', () => {
    it('updates the message when count exceeds 5', () => {
      cy.mount(Counter)
      for (let i = 0; i < 6; i++) {
        cy.get('button').click()
      }
      cy.get('div').should('contain', 'Limit reached! 6')
    })
  
    it('displays the correct count message below 5', () => {
      cy.mount(Counter)
      for (let i = 0; i < 3; i++) {
        cy.get('button').click()
      }
      cy.get('div').should('contain', 'Count is: 3 3')
    })
  })
  