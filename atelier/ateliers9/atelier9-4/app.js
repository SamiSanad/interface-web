// TODO Attendre que le DOM soit prêt AVANT d'exécuter le code
// Sélecteurs
const grille = document.getElementById('grille');
const btnAdd = document.getElementById('btnAdd');
const btnClear = document.getElementById('btnClear');
const scoreEl = document.getElementById('score');

// État
let score = 0;

// Liste d’émojis et methodes utiles à la création d’émojis
// dans l'élément grille
const EMOJIS = [
  '🐼',
  '🦊',
  '🐸',
  '🐵',
  '🐯',
  '🐨',
  '🐧',
  '🐱',
  '🐶',
  '🐹',
  '🦄',
  '🐤',
];

const randOf = (arr) => arr[Math.floor(Math.random() * arr.length)];

function creerEmoji() {
  const div = document.createElement('div');
  div.className = 'emoji';
  div.textContent = randOf(EMOJIS);
  // AUCUN écouteur ici → délégation!
  return div;
}

function ajouterN(n = 5) {
  for (let i = 0; i < n; i++) {
    const div = creerEmoji();
    grille.appendChild(div);
  }
}

function vider() {
  grille.textContent = '';
}

function majScore(delta) {
  score += delta;
  scoreEl.textContent = String(score);
}

//TODO  Délégation d’événements : un seul écouteur sur le parent
// on peut verifier si l’élément cliqué est un émoji
// avec event.target.matches('.emoji'). retourne true si l'élément target
// correspond au sélecteur css '.emoji'

// TODO Boutons add et clear, ajoute 5 éléments ou vide la grille

// Démarrage : quelques émojis pour jouer tout de suite
ajouterN(8);
