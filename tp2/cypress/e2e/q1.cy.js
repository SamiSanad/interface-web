import { ouvrir, appeler, verifierNombre } from '../support/helpers.js';
describe('Q1 - Convertisseur de temperature', () => {
  beforeEach(() => ouvrir(1));
  for (const [celsius, attendu] of [[0,32],[100,212],[25,77],[-40,-40],[-15,5],[37,98.6],[23.5,74.3]]) {
    it('Conversion de ' + celsius + ' Celsius', () => {
      appeler(1, 'convertirCelsiusVersfahrenheit', celsius).then(resultat => {
        expect(resultat).to.be.a('number');
        expect(resultat).to.be.closeTo(attendu, 0.00000001);
      });
    });
  }
  it('Le clic affiche la conversion, avec ou sans phrase', () => {
    cy.get('#c').type('25'); cy.get('#go').click(); verifierNombre('#out', 77);
    cy.get('#c').clear().type('-15'); cy.get('#go').click(); verifierNombre('#out', 5);
  });
  it('Une entree vide affiche le message demande', () => {
    cy.get('#go').click();
    cy.get('#out').should(el => expect(el[0].innerText).to.match(/Veuillez\s+entrer\s+une\s+valeur/iu));
  });
  it('Zero est une temperature valide', () => {
    cy.get('#c').type('0'); cy.get('#go').click(); verifierNombre('#out', 32);
  });
});
