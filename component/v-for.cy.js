import { mount } from '@vue/test-utils'
import List from '@/components/v-for.vue'

describe('v-for.vue', () => {
  it('Check that the list is iterated through', () => {
    cy.mount(List);

    cy.get("li").should('have.length', 4);

    cy.get("li").eq(0).should('have.text', '0: Apple');
    cy.get("li").eq(1).should('have.text', '1: Banana');
    cy.get("li").eq(2).should('have.text', '2: Kiwi');
    cy.get("li").eq(3).should('have.text', '3: Orange');
  });

  it('Check that the list is iterated through with new items', () => {
    cy.mount(List);

    cy.get('button').click();

    cy.get("li").should('have.length', 3);

    cy.get("li").eq(0).should('have.text', '0: Grapes');
    cy.get("li").eq(1).should('have.text', '1: Pineapple');
    cy.get("li").eq(2).should('have.text', '2: Strawberry');
  });
});