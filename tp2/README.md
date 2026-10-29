# TP2 - JavaScript

## Remise

1. Dans le dépôt GitHub partagé avec l'enseignant, créer un dossier `tp2`.
2. Extraire les fichiers du ZIP dans ce dossier.
3. Compléter seulement `scripts/q1.js` à `scripts/q6.js`.
4. Tester le travail et faire des commits régulièrement.
5. Pousser les modifications sur GitHub avant la date de remise.

## Installation

1. Installer [Node.js](https://nodejs.org/fr).
2. Ouvrir un terminal dans le dossier qui contient le fichier `package.json`.
3. Installer les dépendances:

```bash
npm install
```

## Démarrer le projet

Dans le dossier qui contient le fichier `package.json`, lancer:

```bash
npm run dev
```

Ouvrir ensuite l'adresse affichée dans le terminal.

Les consignes de chaque question se trouvent dans les pages du dossier `questions/`. Effectuer les tâches demandées dans les fichiers JavaScript du dossier `scripts/`.

## Vérifier le travail

Vérifier les six questions:

```bash
npm test
```

Vérifier une seule question avec `npm run test:q1`, `npm run test:q2`, etc., jusqu'à `npm run test:q6`.

Ouvrir l'interface Cypress avec `npm run test:watch`, choisir le navigateur et la question, puis relancer les tests après chaque modification.

## Fichiers du projet

| Dossier ou fichier | Contenu |
| --- | --- |
| `questions/` | Les six questions et leurs pages HTML |
| `scripts/` | Les six fichiers JavaScript à compléter |
| `styles/` | Les styles fournis |
| `cypress/e2e/` | Les tests Cypress des six questions |
| `cypress/support/` | Les fonctions communes aux tests |
| `cypress.config.js` | La configuration de Cypress |
| `package.json` | Les dépendances et les commandes npm |

Conserver les pages HTML, les styles, les tests et les exports fournis dans les scripts.

## Évaluation

- Le code fonctionne et produit les résultats demandés.
- Les tests passent.
- Le code est propre, bien indenté et utilise les notions vues en classe.
- Les commits sont réguliers, avec des messages clairs.

Les bonus restent facultatifs. Ils ne bloquent pas la réussite des tests obligatoires.
