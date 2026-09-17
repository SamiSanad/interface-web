# Atelier CSS - Centre de Statistiques NFL

Bienvenue dans l'atelier CSS sur le thème des statistiques NFL! Cet atelier vous permettra de pratiquer les concepts fondamentaux du CSS à travers des exercices progressifs.

## Structure du Projet

```
/
├── index.html (Page d'accueil)
├── pages/
│   ├── teams.html (Page des équipes)
│   ├── players.html (Page des joueurs)
│   ├── stats.html (Page des statistiques)
│   └── schedule.html (Page du calendrier)
├── styles/
│   ├── main.css (Styles principaux)
│   ├── teams.css (Styles des équipes)
│   ├── players.css (Styles des joueurs)
│   ├── stats.css (Styles des statistiques)
│   └── schedule.css (Styles du calendrier)
└── solution/ (Dossier avec les solutions)
```

## Comment Travailler

1. **Ouvrez le projet** dans votre navigateur en lançant un serveur local
2. **Lisez chaque exercice** et identifiez les problèmes visuels
3. **Modifiez les fichiers CSS** selon les instructions
4. **Actualisez la page** après chaque modification pour voir les changements
5. **Testez sur différentes tailles d'écran** pour les exercices responsive
6. **Comparez avec la solution** une fois terminé

## Conseils

- Utilisez les outils de développement de votre navigateur pour inspecter les éléments
- Testez vos sélecteurs CSS dans la console pour vérifier leur spécificité
- N'hésitez pas à expérimenter avec les valeurs pour mieux comprendre les effets
- Les solutions se trouvent dans le dossier `solution/` - consultez-les uniquement après avoir essayé!

Bon atelier!

## Exercices à Réaliser

### Exercice 0: Section Hero avec Image de Fond (index.html)

**Objectif**: Transformer la nouvelle section `.hero-section` en une belle bannière avec une image de ballon de football en arrière-plan.

**Étapes détaillées**:

1. **Ajoutez l'image de fond** à `.hero-section` dans `styles/main.css`:

   ```css
   .hero-section {
     background-image: url('/img/football.jpeg');
     background-size: cover;
     background-position: center;
   }
   ```

   **Après actualisation**: - vous devriez voir l'image de ballon apparaître

2. **Ajoutez les dimensions et l'espacement**:

   ```css
   .hero-section {
     /* ... styles précédents ... */
     height: 400px;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 40px 0;
     border-radius: 12px;
     overflow: hidden;
   }
   ```

   **Après actualisation**: - la section doit maintenant avoir une hauteur fixe et le contenu centré

3. **Stylisez le contenu** avec `.hero-content`:

   ```css
   .hero-content {
     background: rgba(1, 51, 105, 0.9);
     color: white;
     padding: 40px;
     border-radius: 8px;
     text-align: center;
     backdrop-filter: blur(5px);
   }
   ```

   **Après actualisation**: - le texte doit être lisible avec un fond semi-transparent bleu

4. **Stylisez le titre** `.hero-content h3`:

   ```css
   .hero-content h3 {
     font-size: 2.5em;
     margin: 0 0 16px 0;
     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
   }
   ```

   **Après actualisation**: - le titre doit être plus grand avec une ombre

5. **Stylisez le paragraphe** `.hero-content p`:

   ```css
   .hero-content p {
     font-size: 1.2em;
     margin: 0 0 24px 0;
     opacity: 0.9;
   }
   ```

   **Après actualisation**: - le texte doit être plus lisible

6. **Créez le bouton d'appel à l'action** `.cta-button`:

   ```css
   .cta-button {
     background: #d50a0a;
     color: white;
     border: none;
     padding: 16px 32px;
     font-size: 1.1em;
     font-weight: bold;
     border-radius: 6px;
     cursor: pointer;
     transition: all 0.3s;
   }
   ```

   **Après actualisation**: - vous devriez voir un beau bouton rouge

7. **Ajoutez l'effet hover** au bouton:

   ```css
   .cta-button:hover {
     background: #b8090a;
     transform: translateY(-2px);
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   }
   ```

   **À tester**: - survolez le bouton, il doit se soulever légèrement

8. **Ajoutez la responsivité** pour mobile:
   ```css
   @media (max-width: 768px) {
     .hero-section {
       height: 300px;
       margin: 20px 10px;
     }
     .hero-content {
       padding: 24px;
     }
     .hero-content h3 {
       font-size: 1.8em;
     }
   }
   ```
   **À tester**: - réduisez la largeur de votre navigateur, la section doit s'adapter

**Résultat attendu**: Une belle section hero avec une image de ballon de football en arrière-plan, du contenu centré avec un fond semi-transparent, et un bouton interactif.
Prenez le temps de modifier les différentes propriétés que vous avez ajouté. cela vous permettra de visualiser l'impact des différentes propriétés sur la page.

---

### Exercice 1: CSS Interne vers Externe (index.html)

**Problème**: La page d'accueil contient du CSS interne dans une balise `<style>` qui entre en conflit avec le CSS externe.

**Étapes détaillées**:

1. **Ouvrez** le fichier `index.html` et **localisez** la balise `<style>` dans le `<head>`
   Vous devriez voir du CSS pour `.header`, `.nav ul`, `.nav li`, `.nav a`, et `.hero`

2. **Copiez** tout le contenu entre `<style>` et `</style>`
   Sélectionnez tout le CSS interne

3. **Ouvrez** `styles/main.css` et **collez** le CSS copié à la fin du fichier
   **Après actualisation**: - rien ne devrait changer visuellement pour l'instant

4. **Supprimez** complètement la balise `<style>...</style>` de `index.html`
   **Après actualisation**: - la page devrait maintenant utiliser uniquement le CSS externe

5. **Dans** `styles/main.css`, **trouvez** la ligne `.header { background-color: #013369 !important;`
   **Supprimez** le `!important` pour avoir: `.header { background-color: #013369;`
   **Après actualisation**: - l'en-tête doit rester bleu foncé (#013369), sinon trouvez ce qui cloche et corrigez.

6. **Trouvez** `.nav ul` et **modifiez** `list-style-type: disc;` en `list-style-type: none;`
   **Après actualisation**: - les puces de la navigation doivent disparaître

7. **Ajoutez** l'effet hover après la règle `.nav a`:
   ```css
   .nav a:hover {
     background-color: white;
     color: #013369;
   }
   ```
   **À tester**: - survolez les liens, ils doivent devenir blancs avec texte bleu

**Vérification**: Allez voir la page d'accueil

- la navigation doit être propre sans puces et avec des effets de survol.
- certaines modifications restent à trouver, essayer de faire en sorte que votre page ressemble à l'image ci bas.

---

### Exercice 2: Styling de Tableaux (pages/teams.html)

**Problème**: Le tableau des équipes manque de style et de fonctionnalités.

**Étapes détaillées**:

1. **Ouvrez** `styles/teams.css` et **trouvez** la règle `.teams-table`
   **Ajoutez** ces propriétés:

   ```css
   .teams-table {
     width: 100%;
     margin-bottom: 40px;
     border: 2px solid #013369;
     border-collapse: collapse;
   }
   ```

   **Après actualisation**: `pages/teams.html` - le tableau doit avoir une bordure bleue

2. **Trouvez** `.teams-table th` et **remplacez** par:

   ```css
   .teams-table th {
     background-color: #013369;
     color: white;
     padding: 16px;
     text-align: center;
     position: sticky;
     top: 0;
   }
   ```

   **Après actualisation**: - l'en-tête doit être bleu avec texte blanc

3. **Ajoutez** après `.teams-table td`:

   ```css
   .teams-table tr:nth-child(even) {
     background-color: #f8f9fa;
   }
   ```

   **Après actualisation**: - les lignes paires doivent avoir un fond gris clair

4. **Ajoutez** l'effet hover:

   ```css
   .teams-table tbody tr:hover {
     background-color: #e3f2fd;
   }
   ```

   **À tester**: - survolez les lignes, elles doivent devenir bleu clair

5. **Modifiez** `.teams-table td` pour centrer le texte:

   ```css
   .teams-table td {
     padding: 16px;
     border-bottom: 1px solid gray;
     text-align: center;
   }
   ```

   **Après actualisation**: - tout le texte doit être centré

6. **Ajoutez** une exception pour la colonne "Équipe":
   ```css
   .teams-table td:nth-child(2) {
     text-align: left;
   }
   ```
   **Après actualisation**: - seule la colonne des noms d'équipes doit être alignée à gauche

**Vérification**: Le tableau doit avoir des lignes alternées, un en-tête sticky, et des effets de survol.

---

### Exercice 3: Sélecteurs d'Attributs et Pseudo-classes (pages/teams.html)

**Problème**: Les cartes d'équipes manquent d'interactivité et de style avancé.

**Étapes détaillées**:

1. **Dans** `styles/teams.css`, **ajoutez** le sélecteur d'attribut après `.team-card`:

   ```css
   .team-card[data-conference='afc'] {
     border-left: 4px solid #013369;
   }
   ```

   - Ce selecteur va s'appliquer aux éléments avec la classe `.team-card` et qui a l'attribut `data-conference='afc'`

**Après actualisation**: - les cartes doivent avoir une bordure gauche bleue

2. **Modifiez** la règle `.team-card` pour ajouter un temps de transition:

   ```css
   .team-card {
     /* ... styles existants ... */
     transition: transform 0.3s;
   }
   ```

   **Puis ajoutez** l'effet hover:

   ```css
   .team-card:hover {
     transform: scale(1.05);
   }
   ```

   **À tester**: - survolez les cartes, elles doivent grandir légèrement

3. **Ajoutez** le sélecteur descendant:

   ```css
   .team-card h3 {
     margin-top: 0;
     color: #d50a0a;
   }
   ```

   **Après actualisation**: - les titres des cartes doivent devenir rouges

4. **Dans** `pages/teams.html`, **ajoutez** `tabindex="0"` aux deux cartes:
   ```html
   <div class="team-card" data-conference="afc" tabindex="0"></div>
   ```
   **À observer**: - tabindex="0" permet de naviguer sur ces éléments à l'aide de la touche tabulation ou avec la souris.  
   **Puis dans** `styles/teams.css`, **ajoutez**:
   ```css
   .team-card:focus {
     outline: none;
     border: 3px solid #007bff;
   }
   ```
   **À tester**: - cliquez sur les cartes, elles doivent avoir une bordure bleue

**Vérification**: Les cartes doivent avoir une bordure gauche bleue, grandir au survol, et être focusables.

la page teams.html devrait ressembler à l'image ci bas

---

### Exercice 4: Menus Déroulants et Listes (pages/players.html)

**Problème**: Le menu déroulant ne fonctionne pas et les listes ont des puces.

**Étapes détaillées**:

1. **Dans** `styles/players.css`, **trouvez** `.dropdown-menu` et **ajoutez**:

   ```css
   .dropdown-menu {
     display: flex;
     gap: 20px;
     list-style-type: none;
     padding: 0;
     margin: 0;
   }
   ```

   **Après actualisation**: `pages/players.html` - les puces du menu bleus doivent disparaître

2. **Modifiez** `.dropdown-content` pour le cacher:

   ```css
   .dropdown-content {
     /* ... styles existants ... */
     display: none;
     list-style-type: none;
     padding: 0;
     margin: 0;
   }
   ```

   **Après actualisation**: - les menus déroulants doivent être cachés

3. **Ajoutez** l'effet hover pour afficher les menus:

   ```css
   .dropdown:hover .dropdown-content {
     display: block;
   }
   ```

   **À tester**: - survolez les boutons, les menus doivent apparaître

4. **Ajoutez** l'effet hover sur les liens du menu:

   ```css
   .dropdown-content a:hover {
     background-color: #f8f9fa;
   }
   ```

   **À tester**: - survolez les liens dans les menus, ils doivent changer de couleur

5. **Modifiez** `.player-stats` pour les puces personnalisées:

   ```css
   .player-stats {
     margin: 15px 0;
     list-style: none;
     padding: 0;
   }
   .player-stats li {
     margin: 5px 0;
     padding: 3px 0 3px 20px;
     position: relative;
   }
   .player-stats li::before {
     content: '▶ ';
     position: absolute;
     left: 0;
     color: #013369;
   }
   ```

   **Après actualisation**: - les stats doivent avoir des flèches bleues comme puces

6. **Modifiez** `.awards-list` pour enlever les puces, retirer le padding ainsi que les marges et centrez les nom dans les rectangles de couleur

   **Après actualisation**: - les récompenses doivent s'afficher en grille 2x2

**Vérification**: Les menus doivent se déplier au survol et les stats avec des puces personnalisées.

- assuerz vous que le look ressemble à l'image.

---

### Exercice 5: Priorité des Sélecteurs (pages/stats.html)

**Problème**: Les sélecteurs entrent en conflit et certains styles ne s'appliquent pas.

**Étapes détaillées**:

1. **Dans** `styles/stats.css`, **trouvez** `#special-box` et **supprimez** `!important`:

   ```css
   #special-box {
     background: blue;
     color: white;
   }
   ```

   **Après actualisation**: `pages/stats.html` - la boîte doit rester bleue

2. **Trouvez** `.priority-box .important-text` et **supprimez** `!important`:

   ```css
   .priority-box .important-text {
     color: green;
     font-size: 16px;
   }
   ```

   **Après actualisation**: - le texte doit rester vert, sinon trouver ce qui défini la couleur et réglez le problème

3. **Dans** `pages/stats.html`, **ajoutez** la classe `final-style` à la div:

   ```html
   <div class="priority-box final-style" id="special-box"></div>
   ```

   **Après actualisation**: - rien ne change encore

4. **Dans** `styles/stats.css`, **ajoutez** la nouvelle classe:

   ```css
   .final-style {
     background: linear-gradient(45deg, #013369, #d50a0a);
     font-size: 20px;
   }
   ```

   **Après actualisation**: - la boîte doit avoir un dégradé bleu-rouge. si ça ne fonctionne pas, modifiez le selecteur pour que le changement s'applique.

5. **Ajoutez** une règle plus spécifique pour le texte:
   ```css
   .final-style .important-text {
     color: white;
     font-weight: bold;
   }
   ```
   **Après actualisation**: - le texte doit être blanc et lisible

**Vérification**: La boîte doit avoir un dégradé bleu-rouge et le texte doit être lisible.

---

### Exercice 6: Modèle de Boîte (pages/stats.html)

**Problème**: Les boîtes ne sont pas centrées et le box-model n'est pas optimisé.

**Étapes détaillées**:

1. **Dans** `styles/stats.css`, **trouvez** `.demo-box` et **ajoutez**:

   ```css
   .demo-box {
     /* ... styles existants ... */
     box-sizing: border-box;
     margin: 20px auto;
     border-radius: 15px;
   }
   ```

   **Après actualisation**: - la boîte bleue doit être centrée avec des coins arrondis

2. **Trouvez** `.centered-box` et **ajoutez**:

   ```css
   .centered-box {
     /* ... styles existants ... */
     box-sizing: border-box;
     margin: 20px auto;
   }
   ```

   **Après actualisation**: - la boîte verte doit être centrée

3. **Dans** `pages/stats.html`, **ajoutez** la classe à la div box-model-demo:

   ```html
   <div class="box-model-demo container-center"></div>
   ```

4. **Dans** `styles/stats.css`, **ajoutez** la nouvelle classe:
   ```css
   .container-center {
     text-align: center;
   }
   ```
   **Après actualisation**: - le texte du titre doit être centrées dans leur conteneur

**Vérification**: Les deux boîtes doivent être centrées dans leur conteneur.

---

### Exercice 7: Gestion du Débordement de Texte (pages/stats.html)

**Problème**: Le texte déborde des conteneurs de manière incorrecte.

**Étapes détaillées**:

1. **Dans** `styles/stats.css`, **trouvez** `.overflow-box` et **ajoutez**:

   ```css
   .overflow-box {
     /* ... styles existants ... */
     overflow: auto;
     white-space: normal;
   }
   ```

   **Après actualisation**: - la boîte doit avoir des barres de défilement automatiques. testez en rétrécissant le texte dans la boite. la barre de defilement devrait disparaître.

2. **Trouvez** `.ellipsis-box` et **ajoutez**:

   ```css
   .ellipsis-box {
     /* ... styles existants ... */
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
   }
   ```

   **Après actualisation**: - le texte long doit être coupé avec "...". si cela ne fonctionne pas, tentez de trouver ou placer ces propriétés css...

3. **Trouvez** `.scroll-box` et **ajoutez**:
   ```css
   .scroll-box {
     /* ... styles existants ... */
     overflow-y: scroll;
     white-space: normal;
   }
   ```
   **Après actualisation**: - la boîte doit avoir une barre de défilement verticale

**Vérification**: L'overflow-box doit avoir des barres de défilement automatiques, l'ellipsis-box doit couper le texte avec "...", et la scroll-box doit avoir une barre de défilement verticale.

---

### Exercice 8: Layout Responsive (pages/schedule.html)

**Problème**: Les cartes de matchs ne s'adaptent pas bien aux différentes tailles d'écran.

**Étapes détaillées**:

1. **Dans** `styles/schedule.css`, **trouvez** `.games-layout` et **remplacez** par:

   ```css
   .games-layout {
     display: flex;
     flex-direction: column;
     gap: 15px;
     margin-bottom: 40px;
   }
   ```

   **Après actualisation**: `pages/schedule.html` - les cartes doivent se placer alignée a gauche

2. **Trouvez** `.game-card` et **ajoutez**:

   ```css
   .game-card {
     /* ... styles existants ... */
     display: flex;
     align-items: center;
     justify-content: space-between;
     flex: 1 1 150px;
   }
   ```

   **À tester**: - redimensionnez la fenêtre, les cartes doivent s'adapter en partant de gauche à droite et ensuite haut en bas...

3. **Ajoutez** la media query à la fin du fichier:

   ```css
   @media (max-width: 768px) {
     .games-layout {
       flex-direction: row;
       flex-wrap: wrap;
     }

     .game-card {
       flex-direction: column;
       text-align: center;
       align-items: stretch;
       flex: 1 1 300px;
     }
     .game-matchup {
       order: -1;
     }
     .bracket-round {
       flex-direction: column;
       gap: 15px;
     }
   }
   ```

   **À tester**: - réduisez la largeur à moins de 768px, les cartes doivent devenir verticales

**Vérification**: Réduisez la largeur de la fenêtre - les cartes doivent se réorganiser et devenir verticales sur mobile.

---

### Exercice 9: Typographie et Couleurs (Toutes les pages)

**Étapes détaillées à appliquer sur toutes les pages**:

1. **Police et Tailles**:
   **Dans** `styles/main.css`, **modifiez** la règle `body`:

   ```css
   body {
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     /* ... autres styles ... */
   }
   ```

   **Ajoutez** les règles pour les titres:

   ```css
   h2 {
     font-size: 2.2em;
     line-height: 1.2;
   }
   h3 {
     font-size: 1.5em;
   }
   ```

   **Après actualisation de toutes les pages**: - la police et les tailles doivent changer

2. **Couleurs et Contrastes**:
   **Ajoutez** dans `styles/main.css`:

   ```css
   .text-primary {
     color: #013369;
   }
   .text-secondary {
     color: #d50a0a;
   }
   ```

   **Puis dans chaque fichier HTML**, **ajoutez** `class="text-primary"` aux `h1` et `h2`:

   ```html
   <h1 class="text-primary">NFL Statistics Hub</h1>
   <h2 class="text-primary">Titre de la page</h2>
   ```

   **Après actualisation**: - tous les titres principaux doivent être bleu foncé. remarquez que le titre de la page principale n'apparait plus, ajustez le comme vous le voulez pour qu'on le voit.

3. **Espacement Cohérent**:
   **Remplacez progressivement** dans tous les fichiers CSS:
   - `padding: 20px` → `padding: 24px`
   - `margin: 15px` → `margin: 16px`
   - `gap: 10px` → `gap: 8px`
   - `padding: 30px` → `padding: 32px`
     **Astuce**: il est possible de remplacer toutes les occurences d'une chaine dans vs code à l'aide de ctrl-shift-h.
     **Après actualisation**: après chaque changement - l'espacement doit être plus cohérent

**Vérification**: La typographie doit être cohérente sur toutes les pages avec des couleurs harmonieuses.

---

### Exercice 10: Variables CSS (Toutes les pages)

**Objectif**: Centraliser les couleurs et valeurs répétitives avec des variables CSS pour faciliter la maintenance.

**Étapes détaillées**:

1. **Créer les Variables Globales**:
   **Dans** `styles/main.css`, **ajoutez** au début du fichier:

   ```css
   :root {
     --color-primary: #013369;
     --color-secondary: #d50a0a;
     --color-success: #28a745;
     --color-warning: #ffc107;
     --color-light: #f8f9fa;
     --color-white: #ffffff;
     --color-text: #333333;
     --color-text-light: #666666;
     --border-radius: 8px;
     --spacing-sm: 8px;
     --spacing-md: 16px;
     --spacing-lg: 24px;
     --spacing-xl: 32px;
   }
   ```

   **Après actualisation**: - rien ne change visuellement pour l'instant

2. **Remplacer les Couleurs dans main.css**:
   **Trouvez** `.header` et **remplacez**:

   ```css
   .header {
     background-color: var(--color-primary);
     /* ... autres styles ... */
   }
   ```

   **Trouvez** `.nav ul` et **remplacez**:

   ```css
   .nav ul {
     background-color: var(--color-secondary);
     /* ... autres styles ... */
   }
   ```

   **Trouvez** `.nav a:hover` et **remplacez**:

   ```css
   .nav a:hover {
     background-color: var(--color-white);
     color: var(--color-primary);
   }
   ```

   **Après actualisation**: - les couleurs doivent rester identiques

3. **Utiliser les Variables d'Espacement**:
   **Trouvez** `.header` et **remplacez**:

   ```css
   .header {
     /* ... autres styles ... */
     padding: var(--spacing-lg);
   }
   ```

   **Trouvez** `.nav ul` et **remplacez**:

   ```css
   .nav ul {
     /* ... autres styles ... */
     padding: var(--spacing-md) 0;
   }
   ```

   **Après actualisation**: - l'espacement doit rester identique

4. **Appliquer aux Boutons**:
   **Trouvez** `.cta-button` et **remplacez**:

   ```css
   .cta-button {
     background: var(--color-secondary);
     color: var(--color-white);
     border: none;
     padding: var(--spacing-md) var(--spacing-xl);
     border-radius: var(--border-radius);
     /* ... autres styles ... */
   }
   ```

   **Après actualisation**: - le bouton doit rester identique

5. **Tester la Puissance des Variables**:
   **Modifiez temporairement** dans `:root`:

   ```css
   :root {
     --color-secondary: #ff6b35; /* Orange au lieu de rouge */
     /* ... autres variables ... */
   }
   ```

   **Après actualisation**: - la navigation et le bouton doivent devenir orange
   **Remettez** `--color-secondary: #d50a0a;` pour revenir au rouge
   **Après actualisation**: - tout redevient rouge

6. **Appliquer dans les Autres Fichiers CSS**:
   **Dans** `styles/teams.css`, **remplacez** les couleurs:

   ```css
   .teams-table {
     border: 2px solid var(--color-primary);
     /* ... autres styles ... */
   }
   .teams-table th {
     background-color: var(--color-primary);
     color: var(--color-white);
     /* ... autres styles ... */
   }
   .team-card[data-conference='afc'] {
     border-left: 4px solid var(--color-primary);
   }
   ```

   **Après actualisation**: `pages/teams.html` - les couleurs doivent rester identiques

7. **Créer un Thème Alternatif (Bonus)**:
   **Ajoutez** une classe thème dans `styles/main.css`:
   ```css
   .theme-dark {
     --color-primary: #1a1a2e;
     --color-secondary: #16213e;
     --color-light: #0f3460;
     --color-white: #e94560;
   }
   ```
   **Dans** `index.html`, **ajoutez temporairement** `class="theme-dark"` au `<body>`:
   ```html
   <body class="theme-dark"></body>
   ```
   **À tester**: - le site doit avoir un thème sombre
   **Supprimez** la classe pour revenir au thème normal

**Vérification**: Vous devez pouvoir changer toutes les couleurs du site en modifiant uniquement les variables dans `:root`. C'est la puissance des variables CSS!

---
