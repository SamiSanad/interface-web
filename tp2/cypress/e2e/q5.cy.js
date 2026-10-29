import { ouvrir } from '../support/helpers.js';
describe('Q5 - Minuterie', () => {
  beforeEach(() => { cy.clock(); ouvrir(5); });
  it('Le compteur augmente chaque seconde', () => {
    cy.get('#start').click(); cy.get('#n').should('have.text','0');
    cy.tick(1000); cy.get('#n').should('have.text','1');
    cy.tick(4000); cy.get('#n').should('have.text','5');
  });
  it('Plusieurs clics Start ne multiplient pas les intervalles', () => {
    cy.get('#start').click().click().click(); cy.tick(2000); cy.get('#n').should('have.text','2');
  });
  it('Stop arrete le compteur', () => {
    cy.get('#start').click(); cy.tick(3000); cy.get('#stop').click();
    cy.tick(5000); cy.get('#n').should('have.text','3');
  });
  it('Le compteur reprend sa valeur apres Stop puis Start', () => {
    cy.get('#start').click(); cy.tick(2000); cy.get('#stop').click(); cy.tick(2000);
    cy.get('#start').click(); cy.tick(1000); cy.get('#n').should('have.text','3');
  });
  it('Stop sans demarrage ne provoque pas une erreur', () => {
    cy.get('#stop').click(); cy.get('#n').should('have.text','0');
  });
  it('setInterval et clearInterval sont bien appeles', () => {
    cy.window().then(win => { cy.spy(win,'setInterval').as('intervalle'); cy.spy(win,'clearInterval').as('arreter'); });
    cy.get('#start').click(); cy.get('#stop').click();
    cy.get('@intervalle').should('have.been.called'); cy.get('@arreter').should('have.been.called');
  });
});
