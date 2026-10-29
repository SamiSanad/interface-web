// Classe Jeu
class Jeu {
  constructor() {
    this.score = 0;
  }

  ajouterPoints(n) {
    this.score += n;

    //Créer et Émettre un événement métier scoreChange
    // on veut transmettre le score actuel avec l'événement
    // utiliser un objet detail contenant le score avec le format
    // { score: this.score }const evenement = new CustomEvent("scoreChange", {
    const evt = new CustomEvent("scoreChanged", {
      detail: { score: this.score },
    });

    document.dispatchEvent(evenement);
  }

  reset() {
    this.score = 0;
    //Créer et Émettre un événement métier initScore
    const evt = new CustomEvent("initScore");

    document.dispatchEvent(evenement);
  }
}

// --- Code principal ---
const jeu = new Jeu();
const affichage = document.getElementById('affichage');
const btnAdd = document.getElementById('btnAdd');
const btnReset = document.getElementById('btnReset');

// Écoute de les événements personnalisé, modifier affichage pur y inscrire
// le score ou le texte initial avec le format "Score : X"

document.addEventListener('scoreChanged', (e)=>{
  affichage.textContent = `Score: ${e.detail.score}`;
})
document.addEventListener('initScore', (e)=>{
  affichage.textContent = `Score: -`;
})
// Boutons
btnAdd.addEventListener('click', () => {
  jeu.ajouterPoints(10);
});

btnReset.addEventListener('click', () => {
  jeu.reset();
});
