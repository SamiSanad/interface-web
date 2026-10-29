import { defineConfig } from 'cypress';
import { readFileSync } from 'node:fs';
import { parse } from 'acorn';

function parcourir(noeud, visite) {
  if (!noeud || typeof noeud !== 'object') return;
  if (typeof noeud.type === 'string') visite(noeud);
  for (const valeur of Object.values(noeud)) {
    if (Array.isArray(valeur)) valeur.forEach(enfant => parcourir(enfant, visite));
    else if (valeur && typeof valeur === 'object') parcourir(valeur, visite);
  }
}
export default defineConfig({
  defaultBrowser: 'edge',
  video: false,
  screenshotOnRunFailure: false,
  retries: 0,
  defaultCommandTimeout: 4000,
  e2e: {
    baseUrl: 'http://127.0.0.1:5187',
    testIsolation: true,
    specPattern: 'cypress/e2e/q*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on) {
      on('task', {
        analyserSource(question) {
          const texte = readFileSync(new URL('./scripts/q' + question + '.js', import.meta.url), 'utf8');
          const arbre = parse(texte, { ecmaVersion: 'latest', sourceType: 'module' });
          const resultat = { membres: [], async: false, await: false, tryCatch: false };
          parcourir(arbre, noeud => {
            if (noeud.async) resultat.async = true;
            if (noeud.type === 'AwaitExpression') resultat.await = true;
            if (noeud.type === 'TryStatement' && noeud.handler) resultat.tryCatch = true;
            if (noeud.type === 'MemberExpression') {
              const nom = noeud.computed ? noeud.property.value : noeud.property.name;
              if (typeof nom === 'string') resultat.membres.push(nom);
            }
          });
          return resultat;
        },
        estFlechee(texte) {
          return parse('(' + texte + ')', { ecmaVersion: 'latest' })
            .body[0].expression.type === 'ArrowFunctionExpression';
        },
      });
    },
  },
});
