import { ouvrir, appeler, moduleQuestion, verifierNombre } from '../support/helpers.js';
describe('Q2 - Fonctions flechees', () => {
  beforeEach(() => ouvrir(2));
  for (const nom of ['add', 'mul']) {
    it(nom + ' est une fonction flechee', () => {
      moduleQuestion(2).then(module => {
        expect(module[nom]).to.be.a('function');
        return cy.task('estFlechee', module[nom].toString()).should('equal', true);
      });
    });
  }
  it('Addition avec plusieurs arguments', () => {
    for (const [a,b,resultat] of [[3,4,7],[10,5,15],[-3,8,5],[0,0,0],[1.5,2.25,3.75]]) {
      appeler(2,'add',a,b).should('be.closeTo',resultat,0.00000001);
    }
  });
  it('Multiplication avec plusieurs arguments', () => {
    for (const [a,b,resultat] of [[3,4,12],[5,6,30],[-2,3,-6],[0,10,0],[1.5,2,3]]) {
      appeler(2,'mul',a,b).should('be.closeTo',resultat,0.00000001);
    }
  });
  it('Les boutons affichent leurs resultats', () => {
    cy.get('#a').click(); verifierNombre('#res',7);
    cy.get('#m').click(); verifierNombre('#res',12);
  });
});
