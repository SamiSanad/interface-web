import { ouvrir, normaliser } from '../support/helpers.js';
describe('Q4 - Manipulation du DOM', () => {
  beforeEach(() => ouvrir(4));
  it('Les outils DOM demandes sont utilises', () => {
    cy.task('analyserSource',4).then(resultat => {
      for (const nom of ['firstElementChild','lastElementChild','children','nextElementSibling',
        'prepend','append','cloneNode','replaceWith','remove','before']) {
        expect(resultat.membres, 'Utiliser ' + nom).to.include(nom);
      }
    });
  });
  it('Affiche le premier, le dernier et le voisin', () => {
    cy.get('#out').should(el => {
      const texte = normaliser(el[0].innerText);
      expect(texte).to.match(/Premier\s*:\s*Pomme/iu);
      expect(texte).to.match(/Dernier\s*:\s*Orange/iu);
      expect(texte).to.match(/Apr[eè]s\s+le\s+1er\s*:\s*Banane/iu);
    });
  });
  it('Ajouter en tete place le paragraphe avant le titre', () => {
    cy.get('#addHead').click();
    cy.get('#zone > :first-child').should(el => {
      expect(el[0].tagName).to.equal('P'); expect(normaliser(el[0].innerText)).to.equal('(tête)');
    });
  });
  it('Ajouter en fin place le paragraphe apres le titre', () => {
    cy.get('#addTail').click();
    cy.get('#zone > :last-child').should(el => {
      expect(el[0].tagName).to.equal('P'); expect(normaliser(el[0].innerText)).to.equal('(fin)');
    });
  });
  it('Plusieurs insertions gardent le bon ordre', () => {
    cy.get('#addHead').click(); cy.get('#addTail').click(); cy.get('#addHead').click();
    cy.get('#zone > p').should(el => expect([...el].map(p=>normaliser(p.innerText)))
      .to.deep.equal(['(tête)','(tête)','(fin)']));
    cy.get('#zone > :first-child').should('have.prop','tagName','P');
    cy.get('#zone > :last-child').should('have.text','(fin)');
  });
  it('Cloner ajoute des cartes avec un nouveau texte', () => {
    cy.get('#cloner').click(); cy.get('#cloner').click();
    cy.get('#cards .card').should('have.length',3).then(el => {
      for (const carte of [el[1],el[2]]) {
        expect(normaliser(carte.innerText)).not.to.equal('');
        expect(normaliser(carte.innerText)).not.to.equal('Modèle');
      }
    });
  });
  it('Remplacer retire le premier element et conserve les autres', () => {
    cy.get('#cloner').click();
    cy.get('#cards .card').first().then(el => {
      const ancienne=el[0];
      cy.get('#remplacer').click();
      cy.get('#cards .card').should('have.length',2).first().should('have.text','Remplacement');
      cy.then(()=>expect(ancienne.isConnected).to.equal(false));
    });
  });
  it('Vider supprime toutes les cartes, meme apres clonage', () => {
    cy.get('#cloner').click(); cy.get('#vider').click();
    cy.get('#cards .card').should('not.exist');
  });
  it('Vider fonctionne aussi avec la carte initiale seule', () => {
    cy.get('#vider').click(); cy.get('#cards .card').should('not.exist');
  });
  it('Inserer place Etape 1.5 avant le deuxieme element', () => {
    cy.get('#ins2').click();
    cy.get('#steps > li').should(el => expect([...el].map(item=>normaliser(item.innerText)))
      .to.deep.equal(['Étape 1','Étape 1.5','Étape 2','Étape 3']));
  });
});
