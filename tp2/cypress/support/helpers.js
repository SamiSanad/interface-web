export function ouvrir(question) {
  return cy.visit('/questions/q' + question + '.html');
}
export function moduleQuestion(question) {
  // Importer dans la fenetre de la page conserve son DOM et son contexte.
  return cy.window().then(win => win.eval('import("/scripts/q' + question + '.js")'));
}
export function appeler(question, nom, ...args) {
  return moduleQuestion(question).then(module => {
    expect(module[nom], 'Fonction exportee ' + nom).to.be.a('function');
    return module[nom](...args);
  });
}
export function normaliser(texte) {
  return texte.normalize('NFC').replace(/\s+/gu, ' ').trim();
}
export function nombres(texte) {
  return [...texte.matchAll(/-?\d+(?:[.,]\d+)?/gu)].map(match => Number(match[0].replace(',', '.')));
}
export function verifierNombre(selecteur, attendu) {
  return cy.get(selecteur).should(elements => {
    expect(nombres(elements[0].innerText).some(n => Math.abs(n - attendu) < 0.0001),
      'Afficher ' + attendu).to.equal(true);
  });
}
