/**
 * Question 6 - Appels API avec fetch et async/await
 * Charger des recettes depuis une API externe
 */

/**
 * Charge les recettes depuis l'API
 */
async function chargerRecettes() {
    // TODO: Afficher un message de chargement dans #recettes

    // TODO: Utiliser try/catch pour gérer les erreurs

    // TODO: Utiliser await fetch() pour récupérer les données de l'API
    // URL: https://dummyjson.com/recipes?limit=3

    // TODO: Vérifier si la réponse est ok (response.ok)

    // TODO: Convertir la réponse en JSON avec await response.json()

    // TODO: Récupérer le tableau recipes depuis data.recipes

    // TODO: Vider la liste #recettes

    // TODO: Parcourir les recettes et créer un <li> pour chacune
    // Format: "nom - prepTimeMinutes min - cuisine"

    // TODO: En cas d'erreur, afficher un message d'erreur dans #recettes
}

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#charger, #recettes)

    // TODO: Au clic sur #charger, appeler chargerRecettes()
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { chargerRecettes, initialiser };
