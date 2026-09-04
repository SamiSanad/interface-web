# 🏴‍☠️ Escape Room HTML - Thème Pirates

## Description

Un atelier interactif d'apprentissage HTML sous forme d'escape room sur le thème des pirates. Les étudiants doivent utiliser les outils de développement pour inspecter le code, corriger les erreurs HTML et progresser à travers 3 salles.

## Objectifs pédagogiques

- Maîtriser les éléments sémantiques HTML5
- Comprendre la structure et validation des formulaires
- Apprendre les différents types d'input
- Utiliser les outils de développement du navigateur
- Associer correctement les labels aux inputs

## Instructions pour les étudiants

1. Ouvrir `index.html` dans un navigateur
2. Utiliser F12 pour ouvrir les outils de développement
3. Inspecter le code HTML de chaque salle
4. Corriger les erreurs trouvées
5. Chercher les indices dans les commentaires HTML
6. Progresser salle par salle jusqu'à la victoire

---

# SOLUTIONNAIRE POUR L'INSTRUCTEUR

## 🏴‍☠️ Salle 1 - La Cabine du Capitaine

**Objectif** : Corriger les éléments sémantiques HTML5

### Erreurs à corriger :

#### Erreur 1 : Journal du Capitaine

```html
<!-- AVANT (incorrect) -->
<div class="broken-element">
  <h3>Le journal du Capitaine</h3>
  <p>Aujourd'hui, nous avons trouvé une île mystérieuse...</p>
  <p><em>Écrit par le Capitaine Barbe-Noire, le 15 mars 1720</em></p>
</div>

<!-- APRÈS (correct) -->
<article class="broken-element">
  <h3>Le journal du Capitaine</h3>
  <p>Aujourd'hui, nous avons trouvé une île mystérieuse...</p>
  <p><em>Écrit par le Capitaine Barbe-Noire, le 15 mars 1720</em></p>
</article>
```

#### Erreur 2 : Note importante

```html
<!-- AVANT (incorrect) -->
<div class="broken-element">
  <h4>Note importante</h4>
  <p>
    N'oubliez pas : le code secret est dans les commentaires de la salle 3 !
  </p>
</div>

<!-- APRÈS (correct) -->
<aside class="broken-element">
  <h4>Note importante</h4>
  <p>
    N'oubliez pas : le code secret est dans les commentaires de la salle 3 !
  </p>
</aside>
```

#### Erreur 3 : Navigation du navire

```html
<!-- AVANT (incorrect) -->
<div class="broken-element">
  <h4>Navigation du navire</h4>
  <div>
    <a href="#pont">Pont principal</a> | <a href="#cale">Cale du navire</a> |
    <a href="#cuisine">Cuisine</a>
  </div>
</div>

<!-- APRÈS (correct) -->
<nav class="broken-element">
  <h4>Navigation du navire</h4>
  <div>
    <a href="#pont">Pont principal</a> | <a href="#cale">Cale du navire</a> |
    <a href="#cuisine">Cuisine</a>
  </div>
</nav>
```

#### Erreur 4 : Footer de la cabine

```html
<!-- AVANT (incorrect) -->
<div class="broken-element">
  <p><small>Cabine du Capitaine - Navire "La Vengeance" - 1720</small></p>
</div>

<!-- APRÈS (correct) -->
<footer class="broken-element">
  <p><small>Cabine du Capitaine - Navire "La Vengeance" - 1720</small></p>
</footer>
```

---

## ⚓ Salle 2 - Le Pont du Navire

**Objectif** : Corriger les formulaires HTML

### Erreurs à corriger :

#### Erreur 1 : Action et méthode du formulaire

```html
<!-- AVANT (incorrect) -->
<form id="recruitment-form">
  <!-- APRÈS (correct) -->
  <form id="recruitment-form" action="salle3.html" method="GET"></form>
</form>
```

#### Erreur 2 : Association des labels aux inputs

```html
<!-- AVANT (incorrect) -->
<label>Nom du pirate :</label>
<input type="text" id="pirate-name" required />

<label>Âge :</label>
<input type="number" id="age" required />

<label>Adresse e-mail :</label>
<input type="text" id="email" required />

<!-- APRÈS (correct) -->
<label for="pirate-name">Nom du pirate :</label>
<input type="text" id="pirate-name" required />

<label for="age">Âge :</label>
<input type="number" id="age" required />

<label for="email">Adresse e-mail :</label>
<input type="email" id="email" required />
```

#### Erreur 3 : Validation min/max pour l'âge

```html
<!-- AVANT (incorrect) -->
<input type="number" id="age" required />

<!-- APRÈS (correct) -->
<input type="number" id="age" min="16" max="65" required />
```

#### Erreur 4 : Type email

```html
<!-- AVANT (incorrect) -->
<input type="text" id="email" required />

<!-- APRÈS (correct) -->
<input type="email" id="email" required />
```

#### Erreur 5 : Values pour les options du select

```html
<!-- AVANT (incorrect) -->
<select id="experience" required>
  <option>Choisir votre niveau</option>
  <option>Débutant (0-2 ans)</option>
  <option>Expérimenté (3-10 ans)</option>
  <option>Vétéran (10+ ans)</option>
</select>

<!-- APRÈS (correct) -->
<select id="experience" required>
  <option value="">Choisir votre niveau</option>
  <option value="beginner">Débutant (0-2 ans)</option>
  <option value="experienced">Expérimenté (3-10 ans)</option>
  <option value="veteran">Vétéran (10+ ans)</option>
</select>
```

#### Erreur 6 : Groupement des boutons radio

```html
<!-- AVANT (incorrect) -->
<input
  type="radio"
  id="navigation"
  name="specialty1"
  value="navigation"
  required
/>
<input type="radio" id="combat" name="specialty2" value="combat" required />
<input type="radio" id="cuisine" name="specialty3" value="cuisine" required />

<!-- APRÈS (correct) -->
<input
  type="radio"
  id="navigation"
  name="specialty"
  value="navigation"
  required
/>
<input type="radio" id="combat" name="specialty" value="combat" required />
<input type="radio" id="cuisine" name="specialty" value="cuisine" required />
```

#### Erreur 7 : Validation du textarea

```html
<!-- AVANT (incorrect) -->
<textarea id="motivation"></textarea>

<!-- APRÈS (correct) -->
<textarea id="motivation" required minlength="20"></textarea>
```

---

## 💰 Salle 3 - La Cale au Trésor

**Objectif** : Types d'input et recherche dans les commentaires

### Code secret à trouver :

Le code secret `123-456-7890` se trouve dans le long commentaire HTML :

```html
<!-- 
    Cher journal,
    
    Aujourd'hui nous avons enterré le trésor sur l'île maudite.
    J'ai créé un code secret pour protéger notre butin.
    
    Le code est composé de chiffres et doit être saisi dans un format spécial.
    Voici les informations importantes :
    
    - Le code secret est : 123-456-7890
    - Il s'agit d'un numéro de contact d'urgence pour l'équipage
    - Le format requis est XXX-XXX-XXXX (comme un numéro de téléphone)
    - N'oubliez pas de configurer le champ input avec le bon type !
    
    Que ce secret reste bien gardé !
    
    Signé : Capitaine Barbe-Noire
    Date : 15 mars 1720
-->
```

### Erreurs à corriger :

#### Erreur 1 : Champ nom du capitaine en lecture seule

```html
<!-- AVANT (incorrect) -->
<input type="text" id="captain-name" value="Capitaine Barbe-Noire" />

<!-- APRÈS (correct) -->
<input type="text" id="captain-name" value="Capitaine Barbe-Noire" readonly />
```

#### Erreur 2 : Type du champ code secret

```html
<!-- AVANT (incorrect) -->
<input
  type="text"
  id="secret-code"
  placeholder="Format: XXX-XXX-XXXX"
  required
/>

<!-- APRÈS (correct) -->
<input
  type="tel"
  id="secret-code"
  placeholder="Format: XXX-XXX-XXXX"
  required
/>
```

#### Action finale :

Saisir le code secret `123-456-7890` dans le champ approprié.

---

## Conseils pour l'instructeur

### Fausses pistes incluses :

- Plusieurs codes incorrects dans les commentaires
- Commentaires trompeurs qui détournent l'attention
- Codes au mauvais format pour tester la compréhension

### Points d'évaluation :

1. **Utilisation des outils de développement** : Les étudiants savent-ils inspecter le code ?
2. **Compréhension sémantique** : Choisissent-ils les bonnes balises HTML5 ?
3. **Formulaires** : Comprennent-ils l'importance de l'accessibilité et de la validation ?
4. **Types d'input** : Savent-ils choisir le type approprié selon le contexte ?
5. **Recherche d'information** : Peuvent-ils naviguer efficacement dans le code source ?

### Durée estimée :

- **Débutants** : 45-60 minutes
- **Intermédiaires** : 30-45 minutes

### Extensions possibles :

- Ajouter plus de salles avec d'autres concepts HTML
- Intégrer des notions d'accessibilité (ARIA)
- Créer des variantes avec différents thèmes

---

## 🚀 Lancement de l'atelier

1. Distribuer les fichiers aux étudiants
2. Expliquer l'utilisation des outils de développement (F12)
3. Rappeler qu'ils ne doivent modifier QUE le HTML
4. Les laisser explorer et découvrir par eux-mêmes
5. Être disponible pour des indices si nécessaire

**Bon voyage, moussaillons ! 🏴‍☠️**
