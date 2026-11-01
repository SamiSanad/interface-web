/**
 * Question 3 - Objets et tableaux
 * Manipuler des tableaux d'objets et afficher des listes filtrées
 */

// TODO: Déclarez le tableau d'objets jeux
const jeux = [
    { nom: 'Azul', duree: 45 },
    { nom: 'Catan', duree: 90 },
    { nom: 'Agricola', duree: 120 },
    { nom: 'Far Away', duree: 25 },
    { nom: 'Flip 7', duree: 20 },
    { nom: 'Ticket to ride', duree: 45 },
];

/**
 * Méthode générique pour afficher une liste de jeux dans un élément ul
 * @param {Array} listeJeux - La liste des jeux à afficher
 * @param {HTMLElement} elementUl - L'élément <ul> dans lequel ajouter les items
 */
function afficherJeux(listeJeux, elementUl) {
    // TODO: Implémenter la logique pour afficher chaque jeu dans l'élément ul
    // Format: <li>nom (duree min)</li>

    listeJeux.forEach((jeu) => {
        const item = document.createElement('li');
        item.textContent = jeu.nom + ' (' + jeu.duree + ' min)';
        elementUl.append(item);
    });
}

/**
 * Initialise les listes de jeux
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#liste-court, #liste-long)
    const listeCourt = document.querySelector('#liste-court');
    const listeLong = document.querySelector('#liste-long');
    // TODO: Filtrer les jeux courts (moins de 60 minutes)
    const courts = jeux.filter((jeu) => jeu.duree < 60);
    // TODO: Filtrer les jeux longs (60 minutes ou plus)
    const longs = jeux.filter((jeu) => jeu.duree >= 60);
    // TODO: Appeler afficherJeux pour chaque liste
    afficherJeux(courts, listeCourt);
    afficherJeux(longs, listeLong);
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { jeux, afficherJeux, initialiser };
