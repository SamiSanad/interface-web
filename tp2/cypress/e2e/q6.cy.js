import { ouvrir, normaliser, nombres } from '../support/helpers.js';
const adresse='https://dummyjson.com/recipes?limit=3';
const recettes=[
  {name:'Pizza exemple',prepTimeMinutes:15,cuisine:'Italian'},
  {name:'Soupe exemple',prepTimeMinutes:25,cuisine:'French'},
  {name:'Tacos exemple',prepTimeMinutes:10,cuisine:'Mexican'},
];
function verifier(donnees=recettes) {
  cy.get('#recettes > li').should(elements => {
    expect(elements).to.have.length(donnees.length);
    donnees.forEach((recette,i) => {
      const texte=normaliser(elements[i].innerText);
      expect(texte).to.include(recette.name).and.include(recette.cuisine);
      expect(nombres(texte)).to.include(recette.prepTimeMinutes);
      expect(texte).to.match(/\bmin\b/iu);
    });
  });
}
describe('Q6 - Chargement des recettes', () => {
  it('La syntaxe async await try catch demandee est presente', () => {
    cy.task('analyserSource',6).then(r => {
      expect(r.async,'Utiliser async').to.equal(true);
      expect(r.await,'Utiliser await').to.equal(true);
      expect(r.tryCatch,'Utiliser try/catch').to.equal(true);
    });
  });
  it('Le bouton charge et affiche les trois recettes', () => {
    cy.intercept('https://dummyjson.com/**',{body:{recipes:recettes}}).as('recettes');
    ouvrir(6); cy.get('#charger').click();
    cy.wait('@recettes').its('request.url').should('equal',adresse); verifier();
  });
  it('Un message est visible pendant la requete', () => {
    ouvrir(6);
    cy.get('.content').then(el => {
      const initial=normaliser(el[0].innerText);
      cy.window().then(win => {
        let terminer;
        const attente=new win.Promise(resolve=>{terminer=resolve;});
        cy.stub(win,'fetch').callsFake(()=>attente).as('requete');
        cy.get('#charger').click(); cy.get('@requete').should('have.been.called');
        cy.get('.content').should(el=>expect(normaliser(el[0].innerText)).not.to.equal(initial));
        cy.then(()=>{ terminer({ok:true,json:async()=>({recipes:recettes})}); });
        verifier();
      });
    });
  });
  it('Un second chargement remplace les anciennes recettes', () => {
    let compte=0;
    const nouvelles=[{name:'Nouvelle recette',prepTimeMinutes:12,cuisine:'Asian'}];
    cy.intercept('https://dummyjson.com/**',req=>req.reply({body:{recipes:compte++===0?recettes:nouvelles}})).as('recettes');
    ouvrir(6); cy.get('#charger').click(); cy.wait('@recettes'); verifier();
    cy.get('#charger').click(); cy.wait('@recettes'); verifier(nouvelles);
    cy.get('#recettes').should('not.contain.text','Pizza exemple');
  });
  for (const erreur of ['reseau','http']) {
    it("Affiche un message en cas d'erreur " + erreur, () => {
      cy.intercept('https://dummyjson.com/**',erreur==='reseau'
        ? {forceNetworkError:true}
        : {statusCode:500,body:{recipes:recettes}}).as('erreur');
      ouvrir(6); cy.get('#charger').click(); cy.wait('@erreur');
      cy.get('.content').should(el=>expect(normaliser(el[0].innerText))
        .to.match(/erreur|impossible|[eé]chec|[eé]chou|probl[eè]me|error|failed|indisponible/iu));
      cy.get('#recettes').should('not.contain.text','Pizza exemple');
    });
  }
});
