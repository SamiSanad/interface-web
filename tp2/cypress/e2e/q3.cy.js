import { ouvrir, moduleQuestion, normaliser } from '../support/helpers.js';
const jeux = [
  {nom:'Azul',duree:45},{nom:'Catan',duree:90},{nom:'Agricola',duree:120},
  {nom:'Far Away',duree:25},{nom:'Flip 7',duree:20},{nom:'Ticket to ride',duree:45},
];
describe('Q3 - Objets et tableaux', () => {
  beforeEach(() => ouvrir(3));
  it('Le tableau contient les six jeux et leurs durees', () => {
    moduleQuestion(3).then(module => {
      expect(module.jeux).to.be.an('array').with.length(6);
      for (const jeu of jeux) expect(module.jeux).to.deep.include(jeu);
    });
  });
  it('La fonction generique utilise la liste et le parent recus', () => {
    moduleQuestion(3).then(module => cy.document().then(doc => {
      const ul = doc.createElement('ul'); doc.body.append(ul);
      module.afficherJeux([{nom:'Test court',duree:30},{nom:'Test limite',duree:60}], ul);
      expect([...ul.children].map(el => el.tagName)).to.deep.equal(['LI','LI']);
      expect([...ul.children].map(el => normaliser(el.innerText)))
        .to.deep.equal(['Test court (30 min)','Test limite (60 min)']);
    }));
  });
  for (const [id,predicat] of [['liste-court',jeu=>jeu.duree<60],['liste-long',jeu=>jeu.duree>=60]]) {
    it('Filtrage et affichage de #' + id, () => {
      const attendu = jeux.filter(predicat).map(jeu => jeu.nom + ' (' + jeu.duree + ' min)').sort();
      cy.get('#' + id + ' > li').should(elements => {
        expect([...elements].map(el=>normaliser(el.innerText)).sort()).to.deep.equal(attendu);
      });
    });
  }
});
